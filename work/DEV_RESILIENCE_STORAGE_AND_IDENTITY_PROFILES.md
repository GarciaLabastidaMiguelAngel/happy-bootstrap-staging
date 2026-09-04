# Development Resilience, Storage and Identity Profiles

Status: ACTIVE_DIRECTION_CANDIDATE
Direction revision: DIRECTION-0006

## Purpose

Ensure Architecture AI remains usable in local and OpenShift development even when central database, enterprise identity or other infrastructure dependencies are not yet available.

## Principle

MISSING DEVELOPMENT INFRASTRUCTURE MUST DEGRADE CAPABILITIES, NOT DESTROY THE DEVELOPMENT ENVIRONMENT.

Do not hide missing durability/security. Expose explicit degraded state.

## Storage profiles

### LOCAL_EMBEDDED
For workstation/LAB.

Uses current approved embedded/local stores for mutable runtime state and read projections.

Git remains authority for declarative/governed artifacts.

### OPENSHIFT_DEV_GIT_PROJECTION
Worst-case development profile when no central DB/PVC-equivalent durable store is available.

Behavior:
- bootstrap governed configuration/specification/architecture/read-model inputs from Git;
- rebuild deterministic projections/caches/indexes when feasible;
- permit only bounded non-durable runtime state;
- mark durability-dependent features DEGRADED or DISABLED;
- never claim persistence that does not exist;
- service should still start and expose Director/read-only/project-state capabilities where feasible.

State: `DEGRADED_NO_DURABLE_RUNTIME_STORE`.

### OPENSHIFT_DEV_EMBEDDED_PERSISTENT
If a supported persistent volume/file-store pattern is available, an embedded single-instance store may be evaluated for development only.

Constraints:
- explicit single-writer/replica assumptions;
- backup/recovery tests;
- file locking/support validation;
- no silent promotion to production architecture.

### CENTRAL_PERSISTENCE
Future shared database/storage providers when infrastructure is available.

Migration must use explicit ports/adapters/migrations and preserve provenance/IDs.

## Git projection boundary

Git may reconstruct:
- specifications;
- policies/gates;
- architecture definitions;
- standards registry definitions;
- OpenAPI/contracts/schemas;
- work planning definitions suitable for declarative storage;
- model/dataset/simulation manifests;
- Arc42/diagram metadata;
- deployment/configuration definitions.

Git should NOT become a high-frequency transactional substitute for:
- live sessions;
- event/saga state;
- rapidly changing runtime counters;
- telemetry;
- transient UI state;
- locks/leases;
- high-volume audit events.

When no durable DB exists, those capabilities must be degraded or explicitly temporary rather than abusing Git.

## Projection/recovery model

On startup:

Git baseline
-> validate manifests/contracts
-> build declarative state
-> rebuild CQRS read models where possible
-> rebuild Lucene/vector/graph projections where possible
-> detect missing mutable runtime state
-> expose health/capability degradation

The Director must be able to explain which state is reconstructable and which was transient.

## Database migration principle

When central infrastructure becomes available:
- classify each data category by authority, mutability, retention, sensitivity, query needs and rebuildability;
- migrate only data whose authority belongs in the new store;
- retain Git for declarative/auditable definitions;
- preserve stable IDs/provenance;
- validate equivalence before switching profiles.

Do not move everything to a database merely because one exists.

## Identity profiles

### LOCAL_DEV_IDENTITY
Used where enterprise LDAP/SSO is unavailable.

Requirements:
- explicit development-only identity mode;
- bounded local user/service identity;
- no pretending enterprise authentication is active;
- audit actor source identified as LOCAL_DEV or equivalent;
- secrets never committed to Git.

### ENTERPRISE_IDENTITY
Future SERVICE/preproduction/production identity integration using the actually approved enterprise mechanism (LDAP-backed identity provider, OIDC or other institutional pattern).

The application core must depend on an identity/authorization abstraction rather than hard-coding development identity behavior.

## Security rule by mode

PLATFORM_DEV/LAB may permit explicitly authorized test capabilities.
SOLUTION/SERVICE defaults must be safer and more restrictive.

Capabilities that require unavailable enterprise controls must be clearly disabled or degraded, not bypassed silently.

## Readiness evidence

For each profile capture:
- startup result;
- enabled/degraded/disabled capabilities;
- persistence guarantees;
- recovery test;
- data-loss boundary;
- security/auth boundary;
- migration path;
- OpenShift compatibility assumptions.

## Goal

The platform should survive the infrastructure sequence:

local embedded
-> OpenShift dev with partial infrastructure
-> OpenShift dev with persistent storage/identity
-> central shared infrastructure

without creating separate product forks.