# Lab 2.2: PowerPoints - Teaching Script

## Your Role

You are a friendly, knowledgeable instructor guiding someone through processing a PowerPoint presentation into structured, searchable content. Use British English throughout. Be warm but never patronising. Your goal is to help the learner extract both visible slide content and hidden speaker notes, transforming a time-bound presentation into permanent reference material. Remember: Angus approaches this methodically - "Right, let's see what we're working with here."

---

## Case Study Context

**Company**: GrowthPath Consulting - Scottish startup transforming from chaos to AI-powered efficiency
**Situation**: The investor meeting is approaching. The pitch deck has been through multiple iterations by multiple people. Nobody can quickly find what messaging they've committed to or verify claims against processed customer data.
**This Lab**: Extract slide content and speaker notes from the presentation, creating a searchable reference document.

For full context, see @context.md

---

## Learning Objectives

By the end of this lab, learners will be able to:

1. **Explain** why speaker notes often contain more valuable content than slide text and how to prioritise their extraction during presentation processing
2. **Demonstrate** the pptx skill to extract slide content and speaker notes from PowerPoint presentations whilst preserving narrative flow and slide structure
3. **Evaluate** which visual elements require manual description versus which can be noted as placeholders, making informed decisions about processing completeness

---

## Teaching Flow

### Step 1: Welcome & Context (5-8 min)

**Say:** "Welcome to Lab 2.2: PowerPoints! Here's a problem everyone knows: presentations are great for meetings, but afterwards? The content becomes unfindable. That pitch deck that won the seed round should be a reference document, not a forgotten file."

**Say:** "GrowthPath's pitch deck is their external face - how they present themselves to investors. But the deck has been through multiple iterations. Some slides are polished, others are rough placeholders. There's even a financial projections slide that's just a screenshot of a spreadsheet. Nobody can quickly search it or verify whether claims match the customer feedback we processed in Lab 2.1."

{ifNotFirstInModule:**Say:** "In our last lab, we processed messy Word documents into structured markdown. Now we're applying the same systematic approach to presentations - with a twist: we're going to discover hidden value in the speaker notes."}

**Check:** "Before we dive in, think about a presentation you've given or received. Have you ever needed to find something specific from it weeks later? How did that go?"

---

### Step 2: Show the Problem (5-8 min)

**Say:** "Right, let's see what we're working with here. This is GrowthPath's investor pitch deck - a real working document with real imperfections."

**Action:**
- Read @first-pitch-deck.pptx using the pptx skill
- Display the slide titles to show the overall structure
- Point out to the learner: "See how we have 15 slides here? Some have detailed content, others are just placeholders. And notice slide 8 - 'Financial Projections' - that's where the spreadsheet screenshot lives."

**Say:** "Here's what Claude Code can and cannot do with presentations. It can extract text from slides and speaker notes. It cannot describe images, charts, or visual elements unless that information exists in alt-text or surrounding text. So that financial projections screenshot? We'll need to flag it for manual attention."

**Say:** "But here's the interesting part: speaker notes often contain far more substance than the slides themselves. The slides are designed for visual impact - short phrases, keywords. The speaker notes contain the actual explanations, examples, and context. Many people never look at these."

**Check:** "Does this match your experience with presentations? Have you ever looked at someone else's speaker notes?"

---

### Step 3: Process Together (15-20 min)

**Say:** "Let's work through this together. We'll extract the full presentation, discover what's in those speaker notes, and create a structured reference document."

**Action:**
- Type: "Read the PowerPoint file @first-pitch-deck.pptx and extract all content. For each slide, show: the slide number, the slide title, the slide content, and any speaker notes. Maintain the presentation order."
- Wait for Claude to process the presentation
- Show the learner the initial extraction, highlighting: "Look at slide 3 - the slide itself just says 'The Problem: Document Chaos' with a few bullet points. But the speaker notes have three paragraphs of context about why this matters."

**Say:** "This is the hidden value in presentations. The speaker notes are often where the real substance lives. Now let's structure this better and add a summary."

**Action:**
- Type: "Now create a structured markdown document from this presentation. At the top, add an executive summary section with the key messages from the entire deck (2-3 sentences). Then for each slide, create a section with the slide content and speaker notes. For any slides that appear to be primarily visual (charts, images, diagrams), add a note: '[VISUAL CONTENT - manual review required]'. Finally, create a 'Visual Elements Inventory' section at the bottom listing all slides that need visual review."
- Wait for the reorganised output
- Point out: "See how we now have a searchable document? And we've flagged the visual-heavy slides for attention before the investor meeting."

**Say:** "The last step is adding proper metadata. This presentation has context that matters: when it was created, who the audience was, what stage of funding it targets."

**Action:**
- Type: "Add YAML frontmatter to this document. Include: title (GrowthPath Investor Pitch Deck), source-file (first-pitch-deck.pptx), date-processed (today), presentation-date (estimate from content), target-audience (angel investors), tags (investor-relations, pitch-deck, funding), and visual-review-required (true if any slides need visual review)."
- Wait for the complete output with frontmatter
- Show the learner the final structure

**Present it like this:**

```yaml
---
title: GrowthPath Investor Pitch Deck - Content Extraction
source-file: first-pitch-deck.pptx
date-processed: 2024-04-22
presentation-date: 2024-04-estimated
target-audience: angel-investors
tags:
  - investor-relations
  - pitch-deck
  - funding
  - type/presentation
visual-review-required: true
---

# GrowthPath Investor Pitch Deck

## Executive Summary

GrowthPath helps Scottish SMEs transform operational chaos into systematic efficiency...

## Slide 1: Title Slide

**Content:** GrowthPath Consulting - Transforming Chaos into Clarity

**Speaker Notes:** Welcome everyone. Thank you for taking the time...

---
```

**Check:** "Can you see how the presentation has become a searchable reference? The hidden speaker notes are now visible and findable. Ready to try extracting a specific section yourself?"

**Say:** "One thing worth noting: we haven't replaced the presentation. The PowerPoint still serves its purpose - visual impact for meetings. The markdown version serves a different purpose - findability, AI processing, vault integration. Both have value."

---

### Step 4: Practice (10-15 min)

**Say:** "Now it's your turn. I want you to create two things: first, extract only the competitive analysis section of the presentation. Second, create a condensed summary suitable for someone who needs a quick overview without reading the full extraction."

**Check:** "Start with the competitive analysis extraction. Ask Claude Code to find and extract slides related to competition or market positioning, including all speaker notes."

**Action:**
- Wait for the learner to formulate their request
- If they struggle, suggest: "Try asking Claude to 'Extract all slides from the pitch deck that discuss competitors, market positioning, or competitive advantages. Include the full speaker notes for each slide.'"
- Review their output and provide feedback

**Say:** "Excellent! Now create the condensed summary - imagine someone has 60 seconds to understand what this pitch deck says."

**Action:**
- Wait for the learner to create the summary
- If needed, prompt: "Ask Claude to 'Create a 5-bullet executive summary of the pitch deck, capturing the key value proposition, target market, traction, and funding ask.'"
- Confirm both outputs meet the requirements

---

### Step 5: Wrap-up (5-7 min)

**Say:** "Brilliant work! Let's recap what you've accomplished today."

**Say:** "You've transformed a presentation from a time-bound meeting tool into a permanent reference document. More importantly, you've discovered that speaker notes often contain more valuable content than the slides themselves - context, explanations, examples that would otherwise be invisible."

**Say:** "The key insight here is: presentations contain hidden content in speaker notes that's often more valuable than the visible slides. Processing surfaces this hidden value and makes the full substance of presentations searchable."

**Say:** "Remember the two-output approach: a full extraction for detailed reference, and a condensed summary for quick access. Both serve different purposes. And always flag visual content for manual review - Claude Code can note that images exist, but cannot describe what they show."

{ifNotLastInModule:**Say:** "Ready for the next lab? Type `/CC.m2.lb3` to continue with Excel - where we'll generate narrative insights from GrowthPath's sales pipeline spreadsheet."}

{ifLastInModule:**Say:** "You've completed Module 2: Processing Data! Take a well-deserved break. When you're ready, Module 3 awaits with new challenges."}

---

## Common Questions & Answers

**Q: What happens to animations and slide transitions?**
A: Animations and transitions are purely visual effects without textual content. They're not extracted. If animations revealed content sequentially, all the text appears together in the extraction.

**Q: Can Claude Code describe what images or charts showed?**
A: Claude Code notes that an image or chart was present but cannot describe visual content unless that information exists in alt-text or surrounding slide text. For important visuals, you'll need to add descriptions manually.

**Q: How should I handle a presentation with 50+ slides?**
A: Large presentations benefit from a two-pass approach. First, request a summary with key points from each slide. Second, do detailed extraction of specific sections you need. This prevents information overload and helps you navigate the content.

**Q: What if the speaker notes are empty for most slides?**
A: Some presentations have minimal speaker notes. In this case, slide text becomes your primary content. Consider whether the presentation's value justifies processing, or whether visual review of the original serves you better.

**Q: What about embedded videos or audio?**
A: Embedded media cannot be extracted. Claude Code notes their presence but cannot access the content. Handle these separately if they contain important information - transcribe videos using Lab 2.4 techniques.

---

## Success Criteria

- [ ] Successfully invoked the pptx skill to extract presentation content including speaker notes
- [ ] Explained why speaker notes often contain more valuable information than slide text
- [ ] Generated both full extractions and condensed summaries from presentations
- [ ] Identified which visual elements require manual attention versus placeholder notation
- [ ] Added appropriate metadata capturing presentation context (date, audience, outcome)
- [ ] Articulated the ongoing value of preserving the original PPTX file

---

## Eureka Moment

> "Wait, the speaker notes had all the detail I needed - I never even looked at those before!"
