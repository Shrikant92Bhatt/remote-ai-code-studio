# Remote AI Code Studio

Production-grade remote coding platform with a browser IDE, Electron desktop client, isolated workspaces, and pluggable coding agents across Claude, OpenAI, Gemini and other providers.

## Stack

- **Web:** Next.js + TypeScript + Monaco Editor
- **Desktop:** Electron + Next.js
- **API:** Node.js + NestJS
- **Agent runtime:** Node.js/TypeScript
- **Workspace:** Docker first, Kubernetes/GKE later
- **Data:** PostgreSQL for control-plane state; Redis for ephemeral state/events
- **Git:** GitHub/GitLab adapters
- **LLMs:** provider adapter + capability-based model router
- **Monorepo:** pnpm workspaces

## Architecture

```text
Next.js / Electron
        |
        v
   Node/Nest API
        |
  Agent Orchestrator
   /      |       \
Context  Tools   Policy
   \      |       /
    Model Router
   /      |       \
Claude  OpenAI   Gemini
        |
        v
 Remote Workspace
 Docker + Git + PTY
```

## First milestone

1. Provider-neutral LLM SDK
2. Agent event protocol
3. Tool registry
4. Workspace abstraction
5. Docker workspace adapter
6. Git operations
7. Next.js IDE shell
8. Electron desktop shell
9. Streaming agent execution
10. Human approval gates
11. Automated test/build verification

## Security principles

- Agents run in isolated workspaces.
- Secrets are never placed in model prompts.
- Dangerous tools require explicit approval.
- Production deployment is denied by default.
- Every tool call is auditable.
- Provider credentials stay server-side.

## Development

```bash
pnpm install
pnpm dev
```

This repository is intentionally being built in vertical slices. The initial slice establishes the contracts that allow Claude, OpenAI, Gemini and future providers to be swapped without changing the agent or UI layers.
