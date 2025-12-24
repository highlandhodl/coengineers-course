# Metadata Schema Examples

## Overview

A metadata schema defines what fields you'll use, what values are allowed, and when each field applies. This document shows example schemas for different roles and contexts.

---

## Consultant/Agency Schema

**Best for:** Client-facing roles, project-based work, external deliverables

### Universal Fields (Every Document)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | text | Yes | Document title |
| date | date | Yes | Creation date or meeting date |
| type | category | Yes | Document type (see values below) |
| status | workflow | Yes | Current workflow state |
| tags | list | Yes | Searchable labels (2-5 per doc) |

### Optional Fields

| Field | Type | When to Use | Description |
|-------|------|-------------|-------------|
| project | text | Project-specific docs | Links to project folder name |
| client | text | Client-facing docs | Client name or code |
| author | text | Team environments | Who wrote it |
| due | date | Has deadline | When it's due |
| reviewed-by | text | After review | Who approved |

### Type Values

- meeting-notes
- report
- proposal
- brief
- checklist
- template
- correspondence
- research
- presentation

### Status Values

| Status | Meaning |
|--------|---------|
| draft | Work in progress |
| internal-review | Ready for team review |
| client-review | Sent to client |
| final | Approved and complete |
| archived | No longer active |

### Example

```yaml
---
title: DataFlow Q1 Strategy Proposal
date: 2025-01-15
type: proposal
status: internal-review
project: dataflow-onboarding
client: DataFlow
tags:
  - client-work
  - proposal
  - strategy
author: Flora McCombie
due: 2025-01-20
---
```

---

## Content Creator Schema

**Best for:** Writers, marketers, anyone creating content for publication

### Universal Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | text | Yes | Content title |
| date | date | Yes | Created or published date |
| type | category | Yes | Content type |
| status | workflow | Yes | Publication workflow |
| tags | list | Yes | Topics and categories |

### Optional Fields

| Field | Type | When to Use | Description |
|-------|------|-------------|-------------|
| slug | text | Web content | URL-friendly version |
| word-count | number | Long-form | Approximate length |
| publish-date | date | Scheduled | When to publish |
| platform | text | Multi-channel | Where it's published |
| campaign | text | Campaign content | Related campaign |

### Type Values

- blog-post
- article
- case-study
- newsletter
- social-post
- video-script
- podcast-notes
- landing-page

### Status Values

| Status | Meaning |
|--------|---------|
| idea | Concept stage |
| outline | Structure planned |
| draft | Writing in progress |
| editing | Ready for edit |
| scheduled | Queued for publishing |
| published | Live |
| archived | Outdated or removed |

### Example

```yaml
---
title: How We Helped Cairngorm Brewing Double Their Revenue
date: 2025-01-10
type: case-study
status: editing
tags:
  - case-study
  - client-success
  - strategy
slug: cairngorm-brewing-case-study
word-count: 1200
publish-date: 2025-01-25
---
```

---

## Project Manager Schema

**Best for:** PM roles, operations, team coordination

### Universal Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | text | Yes | Document title |
| date | date | Yes | Creation date |
| type | category | Yes | Document type |
| status | workflow | Yes | Current state |
| project | text | Yes | Related project |
| tags | list | Yes | Searchable labels |

### Optional Fields

| Field | Type | When to Use | Description |
|-------|------|-------------|-------------|
| owner | text | Action items | Who's responsible |
| due | date | Has deadline | Target completion |
| priority | category | Needs ranking | high/medium/low |
| stakeholders | list | External facing | Key people involved |
| sprint | text | Agile teams | Sprint identifier |

### Type Values

- meeting-notes
- status-update
- decision-log
- risk-register
- retrospective
- project-brief
- change-request
- handover

### Status Values

| Status | Meaning |
|--------|---------|
| draft | Being prepared |
| active | Current, in use |
| blocked | Waiting on dependency |
| complete | Finished |
| archived | Historical reference |

### Example

```yaml
---
title: Week 3 Sprint Retrospective
date: 2025-01-17
type: retrospective
status: complete
project: website-redesign
tags:
  - retrospective
  - sprint-3
  - team-process
owner: Flora McCombie
stakeholders:
  - Hodl McDougall
  - Angus MacLeod
sprint: sprint-3
---
```

---

## Personal Knowledge Management Schema

**Best for:** Individual note-taking, learning, personal productivity

### Universal Fields

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| title | text | Yes | Note title |
| date | date | Yes | Created date |
| type | category | Yes | Note type |
| tags | list | Yes | Topics |

### Optional Fields

| Field | Type | When to Use | Description |
|-------|------|-------------|-------------|
| source | text | From reading/learning | Where you found it |
| status | workflow | Active notes | Processing state |
| area | text | Ongoing topics | Life area |
| related | list | Connected notes | Links to other notes |

### Type Values

- note
- idea
- journal
- learning
- book-notes
- meeting
- reflection
- reference

### Status Values (simplified)

| Status | Meaning |
|--------|---------|
| seedling | Just captured |
| growing | Developing |
| evergreen | Mature, reference-quality |

### Example

```yaml
---
title: Notes on Deep Work by Cal Newport
date: 2025-01-12
type: book-notes
tags:
  - productivity
  - focus
  - books
source: "Deep Work by Cal Newport"
status: growing
area: professional-development
related:
  - time-blocking-experiments
  - focus-strategies
---
```

---

## Minimal Schema (Starter)

**Best for:** Getting started, testing metadata, simple needs

If the above feels overwhelming, start here:

### Fields

| Field | Type | Description |
|-------|------|-------------|
| title | text | What is this? |
| date | date | When was it created? |
| status | workflow | Where is it in the workflow? |
| tags | list | How should I find it? |

### Status Values

- draft
- done

### Example

```yaml
---
title: Team Meeting Notes
date: 2025-01-15
status: done
tags:
  - meetings
  - team
---
```

Start minimal. Add fields only when you genuinely need them.

---

## Schema Design Principles

1. **Start simple** - Begin with 4-5 fields, add more only when needed
2. **Be consistent** - Same field names across all documents
3. **Define values** - Document what each status/type means
4. **Review regularly** - Quarterly, check if your schema still fits your needs
5. **Evolve gradually** - Change one thing at a time
