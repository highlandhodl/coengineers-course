# Folder Architecture Patterns

## Overview

Different types of work benefit from different folder structures. This guide covers four patterns that handle most situations. The key is consistency within each type - every client project should look the same; every content creation project should look the same.

---

## Pattern 1: Content Creation

**Use when:** You're making something - an article, design, report, presentation, video, or any deliverable.

**Why this works:** The structure follows your creative workflow from brief through research, drafts, and assets to final output.

### Structure

```
project-name/
├── 00-brief/
│   └── [project requirements, objectives, specifications]
├── 01-research/
│   └── [background materials, references, inspiration]
├── 02-drafts/
│   └── [work in progress, iterations, versions]
├── 03-assets/
│   └── [images, data files, supporting materials]
├── 04-final/
│   └── [completed deliverables, approved versions]
└── README.md
```

### Folder Purposes

| Folder | What Goes Here |
|--------|----------------|
| 00-brief | Original requirements, objectives, success criteria |
| 01-research | Background reading, competitor examples, inspiration |
| 02-drafts | Work in progress - name with dates or version numbers |
| 03-assets | Supporting files - images, data, fonts, logos |
| 04-final | Approved, completed deliverables only |

### Example Usage

Flora is creating a case study about GrowthPath's work with Cairngorm Brewing:
- 00-brief: case-study-requirements.md with goals and key messages
- 01-research: interview notes, data from the engagement, client quotes
- 02-drafts: case-study-v1.md, case-study-v2.md, case-study-v3.md
- 03-assets: client-logo.png, results-chart.xlsx, hero-image.jpg
- 04-final: cairngorm-brewing-case-study.pdf

---

## Pattern 2: Client/Stakeholder

**Use when:** You're working with external parties - client engagements, vendor relationships, partner projects.

**Why this works:** The structure maps to a typical engagement lifecycle: admin setup, discovery, planning, delivery, and feedback.

### Structure

```
client-project/
├── 00-admin/
│   └── [contracts, invoices, contacts, logistics]
├── 01-discovery/
│   └── [initial conversations, requirements gathering, context]
├── 02-planning/
│   └── [proposals, timelines, resource plans, agreements]
├── 03-delivery/
│   └── [working documents, deliverables, communications]
├── 04-feedback/
│   └── [reviews, testimonials, lessons learned]
└── README.md
```

### Folder Purposes

| Folder | What Goes Here |
|--------|----------------|
| 00-admin | Contracts, invoices, contact details, scheduling |
| 01-discovery | Initial meetings, needs assessment, current state analysis |
| 02-planning | Proposals, project plans, scope documents, agreements |
| 03-delivery | All working documents and deliverables during the engagement |
| 04-feedback | Client feedback, testimonials, retrospective notes |

### Example Usage

Flora is onboarding DataFlow as a new client:
- 00-admin: contract-signed.pdf, sarah-chen-contact.md, meeting-logistics.md
- 01-discovery: discovery-call-notes.md, current-challenges.md, stakeholder-map.md
- 02-planning: proposal-v2.pdf, project-timeline.md, kickoff-agenda.md
- 03-delivery: weekly-reports/, strategy-documents/, recommendations/
- 04-feedback: client-survey-responses.md, testimonial-request.md

---

## Pattern 3: Research/Analysis

**Use when:** You're investigating a question, gathering insights, or making sense of information.

**Why this works:** The structure follows the research process: question, sources, notes, analysis, conclusions.

### Structure

```
research-project/
├── 00-question/
│   └── [research question, objectives, scope]
├── 01-sources/
│   └── [articles, reports, data sets, interviews]
├── 02-notes/
│   └── [annotations, highlights, observations]
├── 03-analysis/
│   └── [synthesis, patterns, frameworks]
├── 04-conclusions/
│   └── [findings, recommendations, next steps]
└── README.md
```

### Folder Purposes

| Folder | What Goes Here |
|--------|----------------|
| 00-question | The research question, objectives, what you're trying to learn |
| 01-sources | Raw materials - articles, reports, transcripts, data |
| 02-notes | Your notes on sources - highlights, quotes, observations |
| 03-analysis | Synthesis work - themes, patterns, frameworks, comparisons |
| 04-conclusions | Final insights, recommendations, presentation of findings |

### Example Usage

Flora is researching competitor pricing strategies:
- 00-question: research-brief.md outlining why and what she needs to learn
- 01-sources: competitor-website-screenshots/, industry-reports/, pricing-pages/
- 02-notes: competitor-a-notes.md, competitor-b-notes.md, industry-trends.md
- 03-analysis: pricing-comparison-matrix.xlsx, positioning-framework.md
- 04-conclusions: pricing-recommendations.md, executive-summary.pdf

---

## Pattern 4: Event/Campaign

**Use when:** You're planning a time-bound activity with distinct phases - conference, product launch, marketing campaign.

**Why this works:** The structure maps to event phases: overview, planning, promotion, execution, review.

### Structure

```
event-project/
├── 00-overview/
│   └── [event brief, objectives, budget, timeline]
├── 01-planning/
│   └── [logistics, vendors, schedules, checklists]
├── 02-promotion/
│   └── [marketing materials, communications, registrations]
├── 03-execution/
│   └── [day-of materials, run sheets, contingencies]
├── 04-review/
│   └── [metrics, feedback, retrospective, photos]
└── README.md
```

### Folder Purposes

| Folder | What Goes Here |
|--------|----------------|
| 00-overview | Event brief, goals, budget, master timeline |
| 01-planning | Venue, catering, speakers, technical requirements |
| 02-promotion | Invitations, social media, email campaigns, registration |
| 03-execution | Run sheets, speaker notes, signage, emergency contacts |
| 04-review | Attendance data, survey results, photos, lessons learned |

### Example Usage

Flora is helping plan GrowthPath's annual client appreciation event:
- 00-overview: event-brief.md, budget.xlsx, master-timeline.md
- 01-planning: venue-options.md, catering-quotes/, speaker-confirmations/
- 02-promotion: invitation-design.pdf, email-sequences/, registration-form-link.md
- 03-execution: day-of-runsheet.md, speaker-slides/, emergency-contacts.md
- 04-review: attendance-report.xlsx, feedback-survey-results.md, event-photos/

---

## Choosing the Right Pattern

Ask yourself: **What am I fundamentally doing?**

| If you're... | Use this pattern |
|--------------|------------------|
| Making something (deliverable) | Content Creation |
| Working with external parties | Client/Stakeholder |
| Investigating or researching | Research/Analysis |
| Planning a time-bound event | Event/Campaign |

---

## Customisation Guidelines

These patterns are starting points, not rigid rules. Feel free to:

- **Rename folders** to match your terminology
- **Add folders** for specific needs (e.g., 05-archive for completed work)
- **Remove folders** you don't need
- **Combine patterns** for hybrid projects

The key is consistency: once you customise a pattern, use that version every time for that type of work.

---

## Naming Conventions

- Use lowercase with hyphens: `client-project` not `Client Project`
- Lead with numbers for sort order: `00-admin` not `admin`
- Use two-digit numbers: `00`, `01`, `02` (allows up to 99 folders)
- Include dates where relevant: `2025-01-meeting-notes.md`
- Be descriptive but concise: `discovery-call-notes.md` not `notes.md`
