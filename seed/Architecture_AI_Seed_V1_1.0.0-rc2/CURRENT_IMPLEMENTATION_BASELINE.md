# Current Implementation Baseline

Status: `UNVERIFIED / BLOCKED_BY_SOURCE`.

This Seed contains a reported baseline, not independently verified implementation truth. The organizational implementation repository is `NOT_OBSERVED` (`SER-002`). The bootstrap staging repository must not be used as its substitute.

| Area | Expected/reported | Evidence state | Required reconciliation |
|---|---|---|---|
| Java | Java 21 direction/baseline reported | build/runtime evidence absent | repo toolchain + `SER-006` |
| application stack | Spring Boot and related Architecture AI components discussed | code/config not observed here | repo inventory |
| formal Specs | 0001–0010 available in Seed | documentary validation only | implementation mapping |
| agents | roles/capabilities discussed | exact runtime implementations unknown | repo/runtime mapping |
| Skills | 16 reported | catalog not observed | `SER-005` |
| Tools/MCP | 30 Tools reported; custom WebSocket “MCP” mentioned | catalog/conformance not observed | `SER-004`, MCP benchmark |
| Graph/storage | directions and candidates exist | final ADR/runtime roles open | `SER-008`, research |
| tests | test presence/results reported in prior material | execution evidence absent | `SER-006` |
| deployment | local-first; centralization/OpenShift future | topology/runtime unknown | repo/config/infrastructure sources |

Use `knowledge/26_CURRENT_IMPLEMENTATION_BASELINE.md`, `knowledge/27_IMPLEMENTATION_GAP_MATRIX.md` and the reconciliation template; do not overwrite expected state with observations until conflict/provenance is recorded.

