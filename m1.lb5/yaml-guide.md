# YAML Frontmatter Guide

## What is YAML Frontmatter?

YAML frontmatter is structured metadata that lives at the very top of a Markdown file. It provides searchable, standardised information about the document without affecting how the content displays.

**YAML** stands for "YAML Ain't Markup Language" - it's a human-readable data format.
**Frontmatter** means it comes at the front of the document, before the main content.

---

## Basic Structure

Frontmatter is enclosed by triple dashes (`---`) at the start and end:

```yaml
---
title: My Document Title
date: 2025-01-15
author: Flora McCombie
---

# Document Content Starts Here

This is the actual content of your document...
```

**Critical rules:**
1. Frontmatter MUST be at the very top of the file (no blank lines before it)
2. The opening `---` must be on line 1
3. The closing `---` marks where content begins
4. Everything between the dashes is YAML syntax

---

## YAML Syntax Basics

### Key-Value Pairs

The fundamental unit of YAML is the key-value pair:

```yaml
key: value
```

The key comes first, followed by a colon, a space, then the value.

**Examples:**
```yaml
title: Quarterly Report
author: Flora McCombie
status: draft
```

---

### Text Values

Plain text values don't need quotes (usually):

```yaml
title: Client Progress Report
project: dataflow-onboarding
```

Use quotes if your text contains special characters:

```yaml
title: "Report: Q1 Results"
note: "This needs review by Monday"
```

---

### Dates

Always use ISO format: `YYYY-MM-DD`

```yaml
date: 2025-01-15
due: 2025-02-01
created: 2024-12-01
```

**Why ISO format?**
- Unambiguous (no confusion between 01/02 and 02/01)
- Sorts correctly (2025-01-15 comes before 2025-01-20)
- International standard

---

### Numbers

Numbers are written without quotes:

```yaml
priority: 1
version: 2.0
word-count: 1500
```

---

### Lists

Lists use dashes on separate lines:

```yaml
tags:
  - client-work
  - quarterly
  - urgent
```

Or the inline format:

```yaml
tags: [client-work, quarterly, urgent]
```

Both produce the same result. The multi-line format is easier to read for longer lists.

---

### Boolean Values

True/false values:

```yaml
published: true
draft: false
needs-review: true
```

---

### Nested Values

You can nest values using indentation (use spaces, not tabs):

```yaml
author:
  name: Flora McCombie
  email: flora@growthpath.co.uk
  role: Customer Success Lead
```

But for most document metadata, keep it flat - nested values add complexity without much benefit.

---

## Common Field Types

### Universal Fields (Use in Most Documents)

| Field | Type | Purpose | Example |
|-------|------|---------|---------|
| title | Text | Document title | `title: Q1 Client Report` |
| date | Date | Creation or meeting date | `date: 2025-01-15` |
| author | Text | Who wrote it | `author: Flora McCombie` |
| status | Category | Workflow state | `status: draft` |
| type | Category | Document type | `type: meeting-notes` |
| tags | List | Searchable labels | `tags: [client-work, urgent]` |

### Optional Fields (Use When Relevant)

| Field | Type | Purpose | Example |
|-------|------|---------|---------|
| project | Text | Related project folder | `project: dataflow-onboarding` |
| area | Text | Related area folder | `area: client-relationships` |
| due | Date | Deadline | `due: 2025-01-20` |
| version | Number | Document version | `version: 2` |
| updated | Date | Last modified | `updated: 2025-01-18` |
| reviewed-by | Text | Who reviewed | `reviewed-by: Hodl McDougall` |

---

## Status Workflows

Define clear status values and what they mean:

| Status | Meaning | Next Action |
|--------|---------|-------------|
| draft | Work in progress | Continue writing |
| review | Awaiting feedback | Get input from reviewer |
| final | Approved, complete | No action needed |
| archived | No longer active | Reference only |

**Example workflow:**
```
draft → review → final → archived
```

---

## Best Practices

### Keep It Simple

Start with minimal fields. You can always add more later.

**Good (minimal):**
```yaml
---
title: DataFlow Discovery Notes
date: 2025-01-15
type: meeting-notes
status: draft
tags:
  - client-work
  - discovery
---
```

**Unnecessary (over-engineered):**
```yaml
---
title: DataFlow Discovery Notes
date: 2025-01-15
type: meeting-notes
status: draft
priority: high
urgency: 3
category: client
subcategory: onboarding
phase: discovery
quarter: Q1
year: 2025
... (and so on)
---
```

### Use Consistent Naming

- Lowercase for tags: `client-work` not `Client-Work`
- Hyphens not spaces: `meeting-notes` not `meeting notes`
- Singular not plural: `client` not `clients`
- Consistent case: pick lowercase and stick with it

### Date Formatting

Always use ISO format: `YYYY-MM-DD`

**Correct:**
```yaml
date: 2025-01-15
```

**Incorrect:**
```yaml
date: January 15, 2025
date: 15/01/2025
date: 01-15-2025
```

### Tag Discipline

- Keep a tag glossary with allowed tags
- Limit to 3-5 tags per document
- Before creating a new tag, check if an existing one works
- Consolidate similar tags regularly

---

## Common Mistakes

### Missing Space After Colon

```yaml
# Wrong
title:My Document

# Correct
title: My Document
```

### Missing Closing Dashes

```yaml
# Wrong
---
title: My Document
author: Flora

# Correct
---
title: My Document
author: Flora
---
```

### Inconsistent Indentation

```yaml
# Wrong (mixed indentation)
tags:
  - item1
   - item2
    - item3

# Correct (consistent 2-space indent)
tags:
  - item1
  - item2
  - item3
```

### Invalid Date Format

```yaml
# Wrong
date: January 15th, 2025
date: 15/01/2025

# Correct
date: 2025-01-15
```

### Special Characters Without Quotes

```yaml
# Wrong (colon in value causes parsing error)
title: Meeting: DataFlow Kickoff

# Correct
title: "Meeting: DataFlow Kickoff"
```

---

## Template with Frontmatter

Here's a complete example of a document template with frontmatter:

```yaml
---
title: "[Document Title]"
date: YYYY-MM-DD
type: meeting-notes
status: draft
project: "[project-name or delete if not project-specific]"
tags:
  - meetings
  - "[add relevant tags]"
author: "[Your name]"
---

# [Document Title]

## Purpose

[One sentence explaining the purpose of this document.]

## Content

[Main content goes here...]
```

---

## Searching Frontmatter with Claude Code

Once your documents have frontmatter, you can search them:

**By status:**
"Find all documents where status is draft"

**By type:**
"List all meeting-notes documents"

**By project:**
"Show me everything related to the dataflow-onboarding project"

**By tags:**
"Find all documents tagged urgent"

**Combined:**
"Find all drafts tagged client-work in the dataflow-onboarding project"

This is the power of frontmatter: your documents become queryable.
