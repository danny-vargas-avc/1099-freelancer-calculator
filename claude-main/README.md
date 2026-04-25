# Claude Code Orchestration Framework

An opinionated framework for [Claude Code](https://claude.com/claude-code) that adds intelligent task orchestration, phased execution, and state management to your development workflow.

## What It Does

- **Complexity routing** — Automatically classifies tasks as simple, moderate, or complex and handles them appropriately
- **Phased execution** — Breaks complex work into phases with deliverables, executes them one at a time, and tracks progress
- **State persistence** — Maintains progress across conversations so you can resume exactly where you left off
- **Expert delegation** — Routes tasks to specialist agents when available, falls back to Claude's native intelligence when not
- **Audit loop** — Post-implementation auditing ensures correctness before committing

## Quick Start

### 1. Install

Copy the `.claude/` directory into your project root:

```bash
cp -r .claude/ /path/to/your/project/.claude/
```

### 2. Configure

Run the setup command in Claude Code:

```
/setup
```

This walks you through configuring:
- **Prime Directive** — Your project's core rules — the non-negotiable constraints that govern all work
- **Build command** — How to build your project
- **Test command** — How to run tests
- **Lint command** — How to check code quality
- **Coding standards** — Project-specific conventions

Or edit `.claude/CLAUDE.md` directly — the `Project Configuration` section at the top has clear placeholders.

### 3. Work

```
/do [describe your task]
```

That's it. The framework handles complexity analysis, planning, execution, and state management automatically.

## Commands

| Command | Purpose |
|---------|---------|
| `/setup` | Configure the framework for your project |
| `/do [task]` | Execute a task with automatic complexity routing |
| `/continue` | Resume work from where you left off |
| `/create-prompt` | Generate structured execution prompts |
| `/run-prompt [id]` | Execute prompts (supports parallel/sequential) |
| `/execute-phase` | Execute the next phase from your plan |
| `/audit-phase` | Audit a completed phase before committing |

## How It Works

### Task Flow

```
You describe a task
        │
        ▼
   Complexity Analysis (files, domains, LOC, dependencies)
        │
        ├── Simple (0-1 pts)  → Execute directly
        ├── Moderate (2-3 pts) → Track in STATE.md, execute
        └── Complex (4+ pts)  → Create PLAN.md → Approve → Execute phases
```

### Phased Execution Loop

For complex tasks, the framework creates a phased plan:

```
/do "build feature X"          → Creates PLAN.md, asks for approval
/execute-phase                 → Implements Phase 1
/audit-phase                   → Audits Phase 1, fixes issues
  (commit)
/execute-phase                 → Implements Phase 2
/audit-phase                   → Audits Phase 2
  ...repeat...
```

### State Management

The framework maintains three optional state files in `.claude/`:

- **SPEC.md** — What to build (requirements, acceptance criteria)
- **PLAN.md** — How to build it (phases, deliverables, agent assignments)
- **STATE.md** — Where you are (progress, resume point, blockers)

Resume any time with `/continue` — it reads your state and picks up exactly where you left off.

## Directory Structure

```
.claude/
├── CLAUDE.md          # Framework config + project rules (always loaded)
├── SPEC.md            # Requirements (optional, created when needed)
├── PLAN.md            # Execution plan (optional, created for complex tasks)
├── STATE.md           # Progress tracking (optional, created during work)
├── agents/            # Specialist agents
├── commands/          # Slash command implementations
├── skills/            # Domain knowledge (progressive disclosure)
│   └── [skill-name]/
│       ├── SKILL.md
│       └── references/
├── reference/         # Project-level reference material
├── prompts/           # Active execution prompts
│   └── completed/     # Archived executed prompts
└── archive/           # Archived STATE files
```

## The Prime Directive

Every project gets a Prime Directive — your #1 rule that governs all work. The framework ships with universal defaults:

1. **Correctness first, then optimize** (no premature micro-optimizations)
2. **One change at a time**
3. **YAGNI** — don't build it until you need it
4. **Zero dead code, zero backwards compatibility**
5. **No premature abstraction**
6. **Validate at every step**

You add your project-specific rule on top. Examples:
- *"Faithful port first — match the reference before optimizing or abstracting"*
- *"Never break the API contract"*
- *"Test coverage must not decrease"*

## Adding Specialists

### Agents

Create specialist agents in `.claude/agents/` with YAML frontmatter:

```markdown
---
name: my-specialist
description: |
  Handles [domain] tasks. Use when the task involves [keywords].
tools: Read, Write, Edit, Bash, Glob, Grep
---

[System prompt for the specialist]
```

The orchestrator discovers agents automatically and routes tasks based on the description.

### Skills

Create domain knowledge in `.claude/skills/`:

```
skills/
└── my-skill/
    ├── SKILL.md           # Core knowledge (loaded when skill triggered)
    └── references/        # Deep knowledge (loaded on demand)
        ├── patterns.md
        └── examples.md
```

## Extending

- **Add reference material** → Drop files in `.claude/reference/` for project-level docs
- **Add agents** → Create `.md` files in `.claude/agents/` with proper frontmatter
- **Add skills** → Create directories in `.claude/skills/` with SKILL.md
- **Add prompts** → Use `/create-prompt` or manually create in `.claude/prompts/`
