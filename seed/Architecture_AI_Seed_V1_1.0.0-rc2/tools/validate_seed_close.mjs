import fs from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2]);
const reportPath = path.resolve(process.argv[3]);

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}
const files = walk(root).sort();
const rel = (p) => path.relative(root, p).split(path.sep).join('/');
const markdown = files.filter((f) => f.endsWith('.md'));
const json = files.filter((f) => f.endsWith('.json'));
const mermaid = files.filter((f) => f.endsWith('.mmd'));
const specFiles = files.filter((f) => /AAI-SPEC-\d{4}.*\.md$/.test(f));
const errors = [], warnings = [];

for (const file of json) {
  try {
    const doc = JSON.parse(fs.readFileSync(file, 'utf8'));
    const refs=[];
    const visit=(v)=>{if(!v||typeof v!=='object')return;if(typeof v.$ref==='string')refs.push(v.$ref);for(const child of Object.values(v))visit(child);};
    visit(doc);
    for(const ref of refs){
      if(/^[a-z]+:/i.test(ref)||ref.startsWith('#'))continue;
      const target=ref.split('#')[0];
      if(target&&!fs.existsSync(path.resolve(path.dirname(file),target)))errors.push(`BROKEN_SCHEMA_REF ${rel(file)} -> ${ref}`);
    }
  } catch(e){errors.push(`INVALID_JSON ${rel(file)}: ${e.message}`);}
}

const linkPattern=/\[[^\]]*\]\(([^)]+)\)/g;
for(const file of markdown){
  const text=fs.readFileSync(file,'utf8');
  for(const match of text.matchAll(linkPattern)){
    let target=match[1].trim();
    if(!target||target.startsWith('#')||/^[a-z]+:/i.test(target))continue;
    target=target.replace(/^<|>$/g,'').split('#')[0];
    if(target&&!fs.existsSync(path.resolve(path.dirname(file),target)))errors.push(`BROKEN_LINK ${rel(file)} -> ${match[1]}`);
  }
}

const required=[
  'README.md','AGENTS.md','BOOTSTRAP.md','ACCEPTANCE.md','CONTEXT_PACK.md','HANDOFF_MANIFEST.md','SEED_V1_READINESS.md',
  'EVOLUTION_STRATEGY.md','CURRENT_IMPLEMENTATION_BASELINE.md','REPOSITORY_MAP.md','CAPABILITY_MAP.md','OPERATING_MODEL.md',
  'EXPANSION_OBLIGATIONS.md','knowledge/22_SPECIFICATION_CATALOG.md','knowledge/23_SPEC_RELATIONSHIP_MAP.md',
  'knowledge/24_REQUIREMENTS_TRACEABILITY.md','knowledge/55_SEED_V1_ARCHITECTURAL_DNA.md',
  'knowledge/72_RESEARCH_AND_SER_NORMALIZATION.md','knowledge/73_SEED_VS_DEVIN_EXPANSION_BOUNDARY.md',
  'knowledge/79_FEDERATED_ORGANIZATIONAL_EVOLUTION.md','knowledge/80_KNOWLEDGE_GEOMETRY_AND_ASSURANCE.md',
  'knowledge/81_SEED_COMPRESSION_AND_AUTONOMOUS_EXPANSION_VALIDATION.md','knowledge/82_DEVIN_EXPANSION_OBLIGATIONS.md',
  'knowledge/86_SEED_ACCEPTANCE_PREPARATION_STATUS.md','knowledge/bootstrap/ACCEPTANCE.md',
  'knowledge/87_SEED_FINAL_CLOSURE_AND_HANDOFF_READINESS.md','knowledge/88_DEFERRED_TO_DEVIN_BOOTSTRAP.md',
  'knowledge/83_OLEADA_3E_DELTA_MANIFEST.md','knowledge/84_OLEADA_3E_VALIDATION_REPORT.md','knowledge/85_OLEADA_3E_STATUS.md',
  'knowledge/schemas/bootstrap-receipt.schema.json','knowledge/schemas/implementation-source-receipt.schema.json',
  'knowledge/schemas/baseline-reconciliation-receipt.schema.json','knowledge/schemas/build-runtime-receipt.schema.json',
  'knowledge/diagrams/HK-DGM-0019-FEDERATED-DOMAIN-EVOLUTION.mmd',
  'knowledge/diagrams/HK-DGM-0020-KNOWLEDGE-GEOMETRY.mmd','control/Architecture_AI_Control_Maestro.xlsx'
];
for(const requiredPath of required)if(!fs.existsSync(path.join(root,requiredPath)))errors.push(`MISSING_REQUIRED ${requiredPath}`);

const readiness=fs.readFileSync(path.join(root,'SEED_V1_READINESS.md'),'utf8');
for(const token of ['HAPPY_HANDOFF_READY = TRUE','SPECIFICATION_BASELINE_READY_FOR_BUILD = FALSE'])if(!readiness.includes(token))errors.push(`MISSING_STATUS_TOKEN ${token}`);
const manifest=fs.readFileSync(path.join(root,'HANDOFF_MANIFEST.md'),'utf8');
for(const token of ['1.0.0-rc1','SEED-SNAPSHOT-CLOSE-001','P-SEED-CLOSE-01','HAPPY_HANDOFF_READY = TRUE','SPECIFICATION_BASELINE_READY_FOR_BUILD = FALSE'])if(!manifest.includes(token))errors.push(`MANIFEST_IDENTITY_MISMATCH ${token}`);

function assertUniqueDefinitions(fileRel,regex,label){
  const text=fs.readFileSync(path.join(root,fileRel),'utf8');
  const ids=[]; for(const m of text.matchAll(regex))ids.push(m[1]);
  const counts=new Map(); for(const id of ids)counts.set(id,(counts.get(id)||0)+1);
  for(const [id,count] of counts)if(count>1)errors.push(`DUPLICATE_${label} ${id} x${count} in ${fileRel}`);
}
assertUniqueDefinitions('knowledge/23_SPEC_RELATIONSHIP_MAP.md',/^\| (REL-\d{4}) \|/gm,'REL_ID');
assertUniqueDefinitions('knowledge/24_REQUIREMENTS_TRACEABILITY.md',/^\| ((?:FR|NFR)-\d{3}) \|/gm,'REQ_ID');
assertUniqueDefinitions('knowledge/28_TEST_AND_VALIDATION_STATUS.md',/^\| (TST-\d{4}) \|/gm,'TEST_ID');
assertUniqueDefinitions('knowledge/31_OPEN_QUESTIONS.md',/^\| (Q-\d{4}) \|/gm,'QUESTION_ID');
assertUniqueDefinitions('knowledge/32_CONTRADICTIONS_AND_GAPS.md',/^\| (HK-GAP-\d{4}) \|/gm,'GAP_ID');
assertUniqueDefinitions('knowledge/62_RESEARCH_OBLIGATIONS_STANDARDS_AND_GAPS.md',/^\| `(RO-(?:3C|3E|ACCEPT)-\d{3})` \|/gm,'RO_ID');

const allMd=markdown.map((f)=>fs.readFileSync(f,'utf8')).join('\n');
for(const file of specFiles){
  const id=path.basename(file).match(/AAI-SPEC-\d{4}/)?.[0];
  if((allMd.match(new RegExp(id,'g'))??[]).length<2)warnings.push(`ORPHAN_SPEC_CANDIDATE ${id} ${rel(file)}`);
}
for(const file of mermaid){
  const base=path.basename(file);
  const escaped=base.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
  if((allMd.match(new RegExp(escaped,'g'))??[]).length===0)warnings.push(`ORPHAN_DIAGRAM_CANDIDATE ${rel(file)}`);
}
for(const id of ['AAI-DEC-0027','AAI-DEC-0028','CAP-3C-009','CAP-3C-016','CAP-3C-022','SER-002','SER-003','SER-006','SER-014','RO-3E-001','RO-ACCEPT-001','EXP-3E-001','EXP-ACCEPT-009','DNA-CAN-018','FX-T']){
  if(!allMd.includes(id))errors.push(`ORPHAN_REQUIRED_ID ${id}`);
}

const textFiles=files.filter((f)=>/\.(md|mmd|json|tsv|sha256)$/i.test(f));
const prohibited=[
  {name:'PRIVATE_KEY',re:/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/},
  {name:'AWS_ACCESS_KEY',re:/\bAKIA[0-9A-Z]{16}\b/},
  {name:'GITHUB_TOKEN',re:/\bgh[pousr]_[A-Za-z0-9_]{20,}\b/},
  {name:'PAN_LIKE',re:/\b(?:\d[ -]*?){13,19}\b/}
];
for(const file of textFiles){
  const text=fs.readFileSync(file,'utf8');
  for(const p of prohibited)if(p.re.test(text))errors.push(`PROHIBITED_CONTENT_${p.name} ${rel(file)}`);
}

const basenames=new Map();for(const file of files){const n=path.basename(file);basenames.set(n,[...(basenames.get(n)||[]),rel(file)]);}
const duplicateBasenames=[...basenames.entries()].filter(([,v])=>v.length>1).map(([name,locations])=>({name,locations}));
const result={
  root,generatedAt:new Date().toISOString(),counts:{files:files.length,markdown:markdown.length,jsonFiles:json.length,
  schemaFiles:json.filter((f)=>f.endsWith('.schema.json')).length,mermaid:mermaid.length,formalSpecFiles:specFiles.length,
  duplicateBasenames:duplicateBasenames.length,errors:errors.length,warnings:warnings.length},
  duplicateBasenames,errors,warnings,packageIntegrityCandidate:errors.length===0
};
fs.writeFileSync(reportPath,JSON.stringify(result,null,2)+'\n');
console.log(JSON.stringify(result,null,2));
process.exitCode=errors.length?1:0;
