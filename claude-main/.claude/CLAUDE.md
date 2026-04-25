# Claude Code Orchestration Framework

Intelligent task orchestration through planning, expert delegation, and state management.

---

## Project Configuration

### Prime Directive
<!-- Your project's non-negotiable constraints. -->

1. **Correctness first, then optimize.** Get it working, validate it works, then make it fast. Never ship untested optimizations. No premature micro-optimizations — profile first, optimize second.
2. **One change at a time.** Never layer multiple untested changes. If step N works and step N+1 breaks, the bug is in step N+1.
3. **YAGNI.** Don't build it until you need it. No speculative features, no "future-proofing," no abstractions for hypothetical requirements. Solve the problem in front of you.
4. **Zero dead code, zero backwards compatibility.** The codebase contains exactly one version of everything: the current, correct version. When code is refactored or replaced, **delete the old version entirely** — no commented-out blocks, no `_old`/`_legacy` suffixes, no `// removed` tombstones, no re-exports for backwards compat, no unused `_` variables from renamed APIs. If it's not used, it doesn't exist.
5. **No premature abstraction.** Write the simplest correct code first. Three similar lines beat a premature helper function.
6. **Validate at every step.** Build, test, and verify before moving on. Build-only verification is insufficient for visual/UI work.

### Build & Verify
<!-- build: [your build command] -->
<!-- test: [your test command] -->
<!-- lint: [your lint command] -->

### Coding Standards
<!-- Project-specific conventions (naming, style, limits) -->

### Canonical References
<!-- Source-of-truth documents in .claude/reference/ -->

---

## Quick Start

**First time?** Run `/setup` to configure the framework for your project
**Begin work:** Use `/do [task]` or describe your task directly
**Resume work:** Use `/continue` to pick up where you left off

The orchestrator (`.claude/agents/orchestrator.md`) handles complexity analysis, routing, and state management automatically.

---

## Commands

| Command | Purpose |
|---------|---------|
| `/setup` | Configure CLAUDE.md for your project (Prime Directive, build commands, standards) |
| `/do [task]` | Execute a task with automatic complexity routing |
| `/continue` | Resume from STATE.md with environment verification |
| `/create-prompt` | Generate structured execution prompts via prompt engineering |
| `/run-prompt` | Execute prompts created by /create-prompt |
| `/execute-phase` | Execute the next phase from PLAN.md |
| `/audit-phase` | Audit a completed phase for correctness before committing |

---

## Directory Structure

```
.claude/
├── CLAUDE.md          # This file — framework config + project rules
├── SPEC.md            # Optional — what to build (requirements, acceptance criteria)
├── PLAN.md            # Optional — how to build it (phases, deliverables)
├── STATE.md           # Optional — where you are (progress, resume point)
├── agents/            # Specialist agents (loaded on relevance)
├── commands/          # Slash command implementations
├── skills/            # Domain knowledge (progressive disclosure)
│   └── [skill]/
│       ├── SKILL.md
│       └── references/
├── reference/         # Project-level reference material (loaded on demand)
├── prompts/           # Active execution prompts
│   └── completed/     # Archived executed prompts
└── archive/           # Archived STATE files
```

---

## State Files

All state files live in `.claude/` — never in the repo root.

- **SPEC.md** — Requirements and acceptance criteria. Created when you have a spec to reference. Optional.
- **PLAN.md** / **PLAN-{feature}.md** — Phased execution plan with deliverables and agent assignments. `PLAN.md` is the primary plan. If a PLAN.md already exists when a new complex task starts, the new plan uses a feature suffix (e.g., `PLAN-auth.md`) to avoid overwriting the active plan. Requires user approval before execution.
- **STATE.md** / **STATE-{feature}.md** — Current progress, resume point, blockers. Mirrors the plan naming: `STATE.md` tracks `PLAN.md`, `STATE-auth.md` tracks `PLAN-auth.md`. Archived (never deleted) when work completes.

---

## Critical Constraints

**Git Commits:**
- Stage files explicitly with `git add [file]` (never `git add .`)
- Use conventional commit format: `[type]: [description]` (fix|feat|refactor|style|docs|test|chore)
- Do NOT add `Co-authored-by` trailers or any AI attribution to commits
- Do NOT include phase numbers in commit messages (e.g., `feat: Phase 1 — scaffold` → `feat: scaffold + core CLI`)
- Commit messages should be concise and describe the *why*, not the *what*

**Code Comments:**
- Comments explain *why*, never *what* — self-documenting code doesn't need narration
- No phase/plan references in code (e.g., `// Phase 2 integration`, `// Added per PLAN.md`)
- No filler preambles (e.g., `// This function handles...`, `// We need to ensure...`) — just state the reason directly
- No obvious comments on self-explanatory code — if the code reads clearly, don't comment it
- Write comments like a senior dev would: terse, contextual, only when the *reason* isn't obvious

**State Management:**
- STATE.md resume point must be specific and executable (not "continue working")
- Never delete STATE.md without archiving to `.claude/archive/STATE-[feature]-[date].md`

---

**Framework Version:** 1.0
