# Lab 2.1: Word Documents - Case Study Context

## Where We Are in the Story

| Field | Value |
|-------|-------|
| Module | 2 - Processing Data |
| Lab | 2.1 - Word Documents |
| Scenario Phase | Foundation to Processed |

---

## What Just Happened

Module 1 was a success. The document vault is in place, Flora's client onboarding went smoothly - she found everything she needed in seconds. The team has momentum.

But now attention has turned to data, and Angus is facing the documents he's been avoiding.

---

## Current Situation

The investor meeting is in seven days. Hodl has asked Angus to "pull together the customer relationship overview" for the investor conversations. Simple enough, right?

Except the customer notes live in a single Word document that's been accumulating content for six months. Hodl added to it whenever he remembered, in whatever format struck him at the moment. The result is a formatting disaster.

**Urgency**: High - seven days until investor meeting
**Deadline**: Investor board meeting
**Stakes**: If Angus can't make sense of the customer relationships quickly, GrowthPath looks unprepared to investors who could provide 8 months of runway

---

## Key Artifacts for This Lab

### Inputs

| Artifact | File | Description |
|----------|------|-------------|
| Early Customer Notes | @early-customer-notes.docx | Messy Word document with 8-10 pages of chaotic customer notes: mixed formatting, typos, multiple date formats, incomplete sentences, abbreviations only Hodl understands |

### Outputs

| Artifact | File | Description |
|----------|------|-------------|
| Processed Notes | customer-notes.md | Clean, structured markdown with YAML frontmatter, organised by customer/meeting with extracted action items |
| DataFlow Summary | dataflow-summary.md | Focused extraction of DataFlow Solutions content (practice exercise) |

---

## Persona Focus: Angus Chalmers

**Role**: Operations Manager & Technical Lead
**Challenge**: Transform inherited document chaos into usable customer intelligence before the investor meeting

### Background Relevant to This Lab

Angus spent five years as a software developer creating order from chaos. He joined GrowthPath partly to build good systems, but the team's pace means processes get bypassed. He designs a document naming convention; Hodl ignores it. He creates a filing structure; Isla saves things wherever.

This Word document is a perfect example. Hodl created it. Hodl added to it. Hodl never told anyone else what was in it. And now Angus needs to extract meaning from it.

### Internal Monologue

*"Right, let's see what we're working with here. Three different date formats in the first page. Of course. 'F/u w/ client re: Q2 tgt' - and what does that mean, exactly? I could spend the next four hours reformatting this manually, or..."*

*"The thing about inherited documents is they carry someone else's logic. Hodl's brain works differently to mine. These notes make perfect sense to him. To me, they're hieroglyphics."*

*"If Claude Code can parse this mess faster than I can, that's time I can spend actually understanding the customer relationships. Which is what Hodl actually needs, not pretty formatting."*

### What They Need From You

Angus needs help extracting structured information from unstructured chaos. He doesn't want you to judge Hodl's formatting - he wants you to help him work with what exists. The goal is understanding, not beautification.

---

## Connection to Learning

### How This Scenario Connects to Objectives

| Learning Objective | Scenario Connection |
|-------------------|---------------------|
| Identify structural elements Claude Code preserves vs. loses | Angus needs to know what to expect - headings and lists survive, fonts and colours don't |
| Apply docx skill for messy document conversion | This is exactly what Angus faces - real-world document chaos, not clean examples |
| Create properly tagged markdown with frontmatter | The processed notes must integrate with the vault system from Module 1 |

### Why This Matters

Document inheritance is a universal problem. Everyone has received files from colleagues, predecessors, or clients that make no sense without context. The ability to rapidly extract meaning from someone else's mess is a genuine superpower.

For GrowthPath, this specific document contains the foundation of their customer relationship story - essential for investor conversations.

---

## What Comes Next

With customer notes processed, Angus turns attention to GrowthPath's pitch deck. The presentation has been through multiple iterations by multiple people, and now contains a mix of polished slides and rough placeholders.

Lab 2.2 applies the same systematic approach to PowerPoint content - extracting the substance while noting what needs attention before the investor meeting.

---

## The Chaos Details

The early-customer-notes.docx contains notes from meetings with:

- **Highland Outdoor Stores** - Local outdoor retailer, first paying customer
- **DataFlow Solutions** - Potential enterprise customer, largest opportunity
- **Edinburgh Events Ltd** - Event management company, early discussions
- **Forth Valley Fabrication** - Manufacturing SME, interested in process improvement

The document includes:
- Three different date formats (15/03/24, March 15th 2024, 15 March)
- Abbreviations (f/u = follow up, tgt = target, mtg = meeting)
- Incomplete sentences ("Client seemed interested in...")
- Comments meant for Hodl ("CHECK THIS WITH ANGUS")
- Mixed heading styles (some bold, some underlined, some both)
- Bullet points and numbered lists used inconsistently
