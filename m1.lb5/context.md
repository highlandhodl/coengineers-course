# Lab 1.5: Metadata Enrichment - Case Study Context

## Where We Are in the Story

| Field | Value |
|-------|-------|
| Module | Building Knowledge Vaults |
| Lab | Metadata Enrichment |
| Scenario Phase | Chaos to Foundation - Making documents findable |

---

## What Just Happened

Flora's knowledge vault is looking beautiful. She has her PARA structure in place (Inbox, Projects, Areas, Resources, Archives), consistent folder architectures for different types of work, and a library of document templates she's already using. The DataFlow project folder is immaculate - numbered subfolders, templates ready to go.

But this morning, she needed to find "all the drafts that need review before Friday." She opened her vault and realised... she has no way to find them without opening every single document. Organised folders aren't the same as searchable documents.

---

## Current Situation

It's Friday afternoon. Flora is preparing for next week and wants to get a clear picture of what's pending. She knows she has:
- Several client documents in "draft" status
- A few pieces tagged as "urgent" in her head (but not in the documents)
- Multiple items related to the DataFlow onboarding

The problem: these documents are scattered across different project folders. She can't ask "show me everything urgent" or "list all drafts" because that information doesn't exist in a searchable way.

Flora has heard about something called "YAML frontmatter" - structured metadata at the top of documents that makes them queryable. She wonders if Claude Code can help her add this to her templates and existing documents.

**Urgency**: Medium - this is about working smarter, not firefighting
**Deadline**: None formal, but she wants this in place before the DataFlow onboarding intensifies
**Stakes**: Without metadata, Flora's vault is organised but not smart. She'll spend increasing time hunting for documents as her vault grows.

---

## Key Artifacts for This Lab

### Inputs

| Artifact | File | Description |
|----------|------|-------------|
| YAML Guide | @yaml-guide.md | Complete YAML syntax reference for frontmatter |
| Schema Examples | @schema-examples.md | Sample metadata schemas for different roles |
| Tag Glossary Template | @tag-glossary-template.md | Structure for controlled vocabulary |
| Sample Document 1 | @samples-to-enhance/meeting-notes-jan15.md | Document needing frontmatter |
| Sample Document 2 | @samples-to-enhance/project-update.md | Document needing frontmatter |
| Sample Document 3 | @samples-to-enhance/client-feedback.md | Document needing frontmatter |
| Sample Document 4 | @samples-to-enhance/research-summary.md | Document needing frontmatter |
| Sample Document 5 | @samples-to-enhance/weekly-report.md | Document needing frontmatter |

### Outputs

| Artifact | File | Description |
|----------|------|-------------|
| Personal Schema | vault-schema.md | Documentation of Flora's metadata fields |
| Tag Glossary | tag-glossary.md | Controlled vocabulary for consistent tagging |
| Enhanced Templates | Updated templates with YAML frontmatter | Templates from Lab 1.4 with metadata added |
| Retrofitted Documents | Enhanced sample documents | Sample documents with appropriate frontmatter |

---

## Persona Focus: Flora McCombie

**Role**: Customer Success Lead & Co-founder
**Challenge**: Finding documents by status, project, and topic without opening each one

### Background Relevant to This Lab

Flora's thoroughness is both her strength and her challenge. She wants every document to be findable, trackable, and properly categorised. The idea of a "library card" for each document - structured metadata that describes what it is, where it belongs, and what state it's in - appeals deeply to her organised nature.

But she's also seen systems fail from over-engineering. Her previous company had a metadata scheme so complex that nobody filled it in properly. She wants something useful but simple - a handful of fields that add real value without becoming a burden.

### Internal Monologue

*"My vault looks beautiful. But looking beautiful isn't the same as working well. I just spent ten minutes trying to find all my draft documents. Ten minutes! And I only have maybe fifty documents in here. What happens when I have five hundred?"*

*"There must be a way to tag things properly. Like a library catalogue. I could mark documents as 'draft' or 'final', tag them by client, by topic... Then asking 'show me everything urgent' would actually work."*

*"But I don't want to over-engineer this. I've seen systems with twenty required fields that nobody fills in. I need just enough structure to be useful, not so much that it becomes a burden."*

### What They Need From You

Flora needs a simple, practical metadata system. Emphasise starting minimal and adding fields only when needed. Show her that a small, consistently-used schema beats a comprehensive one that's ignored. Help her create a controlled vocabulary (tag glossary) so she doesn't end up with "urgent", "Urgent", "URGENT", and "high-priority" all meaning the same thing.

---

## Connection to Learning

### How This Scenario Connects to Objectives

| Learning Objective | Scenario Connection |
|-------------------|---------------------|
| Explain YAML frontmatter purpose and syntax | Flora needs to understand what frontmatter is and why it matters |
| Design a personal metadata schema | Creating a schema that works for GrowthPath's needs |
| Use Claude Code to add, query, and validate metadata | Practical application across vault documents |

### Why This Matters

Metadata transforms a static document collection into a dynamic, queryable knowledge base. Without it, finding documents requires remembering where you put them. With it, you can ask questions: "What's in draft?" "Show me everything about DataFlow." "What's tagged urgent?" This is the difference between organised storage and genuine knowledge management.

---

## What Comes Next

Lab 1.5 is the final lab in Module 1. After this, Flora's knowledge vault will be complete: PARA structure, consistent folder architectures, document templates, and searchable metadata. The foundation is built.

Module 2 shifts focus from organisation to processing. The vault is ready to receive content - now the team needs to extract useful information from the messy data they have. Spreadsheets, presentations, transcripts, and images all need to be transformed into structured, searchable content.

The transition: "My vault is ready. Now I need things to put in it - but the data I have is a mess."

---

## YAML Frontmatter Primer

YAML frontmatter is structured metadata at the very top of a Markdown file, enclosed by triple dashes:

```yaml
---
title: Client Progress Report
date: 2025-01-15
type: report
project: dataflow-onboarding
status: draft
tags:
  - client-work
  - monthly
author: Flora McCombie
---
```

### Why It Matters

- **Human-readable**: Easy to scan and understand
- **Machine-processable**: Claude Code can search and filter by these fields
- **Standardised**: Works across many tools and platforms
- **Non-intrusive**: Lives at the top of the file, separate from content

### Core Field Types

| Field | Purpose | Example |
|-------|---------|---------|
| title | Document name | "Q1 Marketing Plan" |
| date | When created/updated | 2025-01-15 |
| type | Document category | meeting-notes, report, template |
| status | Workflow stage | draft, review, final, archived |
| tags | Topics/themes | [planning, urgent, client-work] |
| project | Associated project | "dataflow-onboarding" |
| author | Who wrote it | "Flora McCombie" |

### Flora's Planned Schema

**Universal Fields** (every document):
- title
- date
- type
- status
- tags

**Optional Fields** (when relevant):
- project
- area
- author
- due
- client
