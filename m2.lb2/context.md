# Lab 2.2: PowerPoints - Case Study Context

## Where We Are in the Story

| Field | Value |
|-------|-------|
| Module | 2 - Processing Data |
| Lab | 2.2 - PowerPoints |
| Scenario Phase | Foundation to Processed |

---

## What Just Happened

Lab 2.1 was a success. The customer notes document - six months of Hodl's chaotic meeting notes - has been transformed into structured, searchable markdown. Angus now has a clear picture of GrowthPath's customer relationships: Highland Outdoor (signed), DataFlow Solutions (pending, big opportunity), Edinburgh Events (early stage), and Forth Valley Fabrication (interested).

With customer intelligence now organised, attention turns to GrowthPath's external messaging.

---

## Current Situation

The investor meeting is in five days. The pitch deck is GrowthPath's external face - their carefully crafted story for potential investors. But "carefully crafted" is generous.

The deck has been through at least four major iterations. Hodl created the original. Isla added design polish to some slides. Flora contributed the market sizing section. Angus added the technical architecture slide. The result is a Frankenstein's monster of a presentation: some slides are polished, others are rough drafts, and nobody quite remembers what commitments they've made in the speaker notes.

**Urgency**: High - five days until investor meeting
**Deadline**: Investor board meeting presentation
**Stakes**: Inconsistent messaging to investors could undermine credibility at a critical funding moment

---

## Key Artifacts for This Lab

### Inputs

| Artifact | File | Description |
|----------|------|-------------|
| First Pitch Deck | @first-pitch-deck.pptx | 15-18 slide investor presentation with inconsistent speaker notes, placeholder slides, visual-heavy content, mixed formatting from multiple contributors |

### Outputs

| Artifact | File | Description |
|----------|------|-------------|
| Pitch Deck Content | pitch-deck-content.md | Slide-by-slide extraction with speaker notes, summary section, visual element inventory |
| Pitch Deck Summary | pitch-deck-summary.md | Condensed version suitable for quick team reference |

---

## Persona Focus: Angus Chalmers

**Role**: Operations Manager & Technical Lead
**Challenge**: Extract and organise presentation content to verify messaging before the investor meeting

### Background Relevant to This Lab

Angus isn't here to judge Hodl's presentation skills or Isla's design choices. He's here to extract substance. The pitch deck represents commitments - claims about capabilities, promises about timelines, projections about growth. Those claims need to align with reality.

He's particularly concerned about slide 8 - the financial projections. It's just a screenshot of a spreadsheet. Not a chart, not a table - a screenshot. The investors will ask questions, and whoever presents needs to know what those numbers actually mean.

### Internal Monologue

*"Right, let's see what we're working with here. Fifteen slides. Some with proper speaker notes, some with nothing. One with 'INSERT CHART HERE' as the only content. Brilliant."*

*"The thing about presentations is they're designed to be ephemeral. You show them once, people nod, and then the deck disappears into a folder. But the claims we make in that room - those persist. 'We can integrate with any CRM in two weeks' - did we actually say that? In what context?"*

*"If Claude Code can pull out all the content and speaker notes, I can at least verify what story we're telling. Make sure it matches what we told the customers in those notes we processed yesterday."*

### What They Need From You

Angus needs help extracting the full content of the presentation, including the hidden speaker notes. He wants to create a searchable reference document that the team can use to prepare for investor questions. He also wants to flag visual elements that need attention before the meeting.

---

## Connection to Learning

### How This Scenario Connects to Objectives

| Learning Objective | Scenario Connection |
|-------------------|---------------------|
| Explain speaker notes value | Angus discovers the detailed context hidden in notes - claims, commitments, explanations not visible on slides |
| Demonstrate pptx skill for extraction | The real-world deck has inconsistencies that require systematic processing |
| Evaluate visual elements | The spreadsheet screenshot and placeholder slides need to be flagged for pre-meeting attention |

### Why This Matters

Presentations are universal in business. They're used for investor pitches, client proposals, internal updates, training sessions. But once the meeting ends, the content becomes difficult to find and reference. Processing presentations into searchable documents creates lasting value from time-bound content.

For GrowthPath, this specific presentation is their funding story. Inconsistencies between the pitch deck and customer reality could undermine investor confidence.

---

## What Comes Next

With customer notes and pitch deck content now processed, Angus faces his biggest challenge: the financial spreadsheet.

Lab 2.3 tackles the customer pipeline - a sales tracking spreadsheet with 25-30 opportunities, inconsistent data entry, and the numbers that will either impress or concern the investors. The pitch deck references revenue projections. The spreadsheet contains the underlying data. They need to align.

---

## The Presentation Details

The first-pitch-deck.pptx contains:

1. **Title Slide** - GrowthPath branding (polished)
2. **The Team** - Founder photos and bios (polished)
3. **The Problem** - Document chaos in SMEs (polished, detailed speaker notes)
4. **The Solution** - GrowthPath's approach (polished)
5. **Market Size** - TAM/SAM/SOM analysis (Flora's section, minimal notes)
6. **Target Customer** - Scottish SME profile (rough, needs refinement)
7. **Traction** - Customer logos and testimonials (partially complete)
8. **Financial Projections** - SPREADSHEET SCREENSHOT (problematic)
9. **Competitive Landscape** - 2x2 matrix (visual, needs description)
10. **Business Model** - Revenue streams (polished)
11. **Go-to-Market** - Sales strategy (rough placeholder)
12. **Technology** - Architecture diagram (Angus's section, detailed notes)
13. **Roadmap** - 12-month timeline (visual, minimal text)
14. **The Ask** - Funding request and use of funds (polished)
15. **Thank You** - Contact information (standard)

Key inconsistencies:
- Speaker notes range from 3 paragraphs to completely empty
- Slide 8 is a screenshot, not editable content
- Slide 11 says "[INSERT GO-TO-MARKET STRATEGY]"
- Mixed fonts from multiple contributors
- Some slides reference "£200K raise", others reference "£150K-250K range"
