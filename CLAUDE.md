# CLAUDE.md - ZenithWorks

## Project Overview

ZenithWorks is a new repository under active development. This file provides guidance for AI assistants working in this codebase.

**Repository**: `pixelperfect88/zenithworks`

## Repository Status

This project is in its initial setup phase. No source code, build configuration, or CI/CD pipelines have been added yet. As the project grows, this file should be updated to reflect the current state.

## Development Workflow

### Branch Conventions

- The default branch should be `main`
- Feature branches should use descriptive names (e.g., `feature/add-auth`, `fix/login-bug`)
- AI-generated branches use the `claude/` prefix

### Commit Messages

- Use clear, descriptive commit messages
- Follow the conventional format: `type: short description`
  - Types: `feat`, `fix`, `refactor`, `docs`, `test`, `chore`, `build`, `ci`
- Keep the subject line under 72 characters
- Use the body for additional context when needed

### Pull Requests

- Include a summary of changes and motivation
- Reference related issues when applicable
- Ensure all checks pass before requesting review

## Coding Conventions

_To be updated as the project establishes its tech stack and patterns._

When contributing, follow these general principles:

- Write clean, readable code with meaningful names
- Keep functions small and focused on a single responsibility
- Add tests for new functionality
- Document public APIs and non-obvious logic
- Avoid introducing security vulnerabilities (see OWASP Top 10)

## Build & Test Commands

_To be populated once the build system is configured._

<!-- Example placeholders - update when tooling is chosen:
```bash
# Install dependencies
npm install

# Run tests
npm test

# Run linter
npm run lint

# Build the project
npm run build
```
-->

## Project Structure

_To be updated as directories and modules are added._

```
zenithworks/
├── CLAUDE.md          # This file - AI assistant guide
└── (project files to be added)
```

## Key Files

| File | Purpose |
|------|---------|
| `CLAUDE.md` | AI assistant onboarding and conventions |

## Dependencies & Tools

_To be documented as dependencies are added to the project._

## CI/CD

_To be configured. Update this section when CI/CD pipelines are set up._

## Notes for AI Assistants

- Always read existing code before proposing modifications
- Run tests and linters before committing changes
- Do not add unnecessary complexity or over-engineer solutions
- Keep this CLAUDE.md file up to date as the project evolves
- When adding new tools or frameworks, document the relevant commands and conventions here
