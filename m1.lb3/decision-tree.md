# Folder Architecture Decision Tree

## Quick Selection Guide

Use this flowchart to choose the right folder pattern for any project.

---

## The Decision Flow

```
START: What kind of work is this?
│
├── Am I MAKING something?
│   (Article, design, report, presentation, video)
│   │
│   └── YES → Use CONTENT CREATION pattern
│       ├── 00-brief
│       ├── 01-research
│       ├── 02-drafts
│       ├── 03-assets
│       ├── 04-final
│       └── README.md
│
├── Am I WORKING WITH external parties?
│   (Client, vendor, partner, stakeholder)
│   │
│   └── YES → Use CLIENT/STAKEHOLDER pattern
│       ├── 00-admin
│       ├── 01-discovery
│       ├── 02-planning
│       ├── 03-delivery
│       ├── 04-feedback
│       └── README.md
│
├── Am I INVESTIGATING or RESEARCHING?
│   (Analysing, comparing, synthesising information)
│   │
│   └── YES → Use RESEARCH/ANALYSIS pattern
│       ├── 00-question
│       ├── 01-sources
│       ├── 02-notes
│       ├── 03-analysis
│       ├── 04-conclusions
│       └── README.md
│
└── Am I PLANNING a time-bound EVENT?
    (Conference, campaign, launch, workshop)
    │
    └── YES → Use EVENT/CAMPAIGN pattern
        ├── 00-overview
        ├── 01-planning
        ├── 02-promotion
        ├── 03-execution
        ├── 04-review
        └── README.md
```

---

## Quick Reference Table

| Primary Activity | Pattern | First Folder | Last Folder |
|-----------------|---------|--------------|-------------|
| Making deliverables | Content Creation | 00-brief | 04-final |
| External party work | Client/Stakeholder | 00-admin | 04-feedback |
| Investigation | Research/Analysis | 00-question | 04-conclusions |
| Time-bound events | Event/Campaign | 00-overview | 04-review |

---

## Example Scenarios

### "I'm writing a blog post series"
**Pattern:** Content Creation
**Why:** You're making something - the posts are your deliverables.

### "I'm onboarding a new client"
**Pattern:** Client/Stakeholder
**Why:** You're working with an external party through a defined engagement.

### "I'm analysing market trends"
**Pattern:** Research/Analysis
**Why:** You're investigating and synthesising information to reach conclusions.

### "I'm planning the company conference"
**Pattern:** Event/Campaign
**Why:** You're organising a time-bound event with planning, promotion, and execution phases.

### "I'm creating a proposal for a potential client"
**Pattern:** Content Creation
**Why:** Even though a client is involved, the primary activity is creating a deliverable.

### "I'm running a 6-week marketing campaign"
**Pattern:** Event/Campaign
**Why:** It's time-bound with planning, promotion, execution, and review phases.

### "I'm doing competitive analysis for our strategy"
**Pattern:** Research/Analysis
**Why:** You're gathering, synthesising, and drawing conclusions from information.

### "I'm managing an ongoing client relationship"
**Pattern:** This is probably an AREA, not a project
**Why:** Ongoing relationships don't have end dates. Create a folder in Areas, not Projects.

---

## Hybrid Situations

Sometimes projects span multiple types. When this happens:

1. **Identify the primary activity** - what will you spend most time doing?
2. **Use that pattern as your base**
3. **Add folders from other patterns if genuinely needed**

### Example: Client case study project
- Primary: Content Creation (you're making a deliverable)
- Secondary: Some client interaction for interviews

**Approach:** Use Content Creation as base, add a `client-materials` subfolder within `01-research` for interview notes and approvals.

---

## When in Doubt

Ask yourself: **What is the main output?**

- A document, design, or deliverable → Content Creation
- A successful client relationship → Client/Stakeholder
- Insights and recommendations → Research/Analysis
- A successful event → Event/Campaign

The output guides the structure.
