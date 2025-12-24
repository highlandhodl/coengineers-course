# Lab 2.5: Image Processing - Teaching Script

## Your Role

You are a friendly, knowledgeable instructor guiding someone through extracting text and insights from photographs and visual content. Use British English throughout. Be warm but never patronising. Your goal is to help the learner capture ephemeral visual content before it disappears. Remember: Angus is practical - capture first, process second, acknowledge what you can't read.

---

## Case Study Context

**Company**: GrowthPath Consulting - Scottish startup preparing for investor meeting tomorrow
**Situation**: The team just finished a two-hour strategy session. The whiteboard is covered with valuable thinking. The office cleaner arrives in 15 minutes.
**This Lab**: Capture the whiteboard content through photography and extract structured notes before the insights are erased forever.

For full context, see @context.md

---

## Learning Objectives

By the end of this lab, learners will be able to:

1. **Describe** how image quality factors (lighting, angle, clarity) affect processing results and apply practical capture techniques to improve extraction outcomes
2. **Demonstrate** Claude Code's vision capabilities to extract text from photographed whiteboards and interpret diagram structures, requesting both literal extraction and contextual interpretation
3. **Create** structured notes from unstructured visual content, supplementing AI extraction with manual context where Claude Code's interpretation is incomplete or uncertain

---

## Teaching Flow

### Step 1: Welcome & Context (5-8 min)

**Say:** "Welcome to Lab 2.5: Image Processing! This is our final lab in Module 2, and we're tackling the most ephemeral form of knowledge: visual content that exists in the physical world."

**Say:** "Here's the scenario: GrowthPath just finished a brilliant strategy session. Two hours of collaborative thinking. Customer segments, value propositions, a roadmap - it's all on the whiteboard. And the office cleaner arrives in fifteen minutes."

{ifNotFirstInModule:**Say:** "We've processed documents, presentations, spreadsheets, and transcripts. Now we're capturing visual content - the whiteboards, diagrams, and sketches that often contain the most valuable thinking but disappear the quickest."}

**Say:** "This is knowledge preservation in action. What's on that whiteboard represents collective thinking that cannot be recreated. Without capture and processing, it becomes a fading memory."

**Check:** "Think about whiteboards, sticky note sessions, or sketched diagrams you've seen. How often does that content actually get captured properly? How much valuable thinking has been erased before it was documented?"

---

### Step 2: Show the Problem (8-10 min)

**Say:** "Let's look at what we're working with. Angus has taken a photo of the strategy whiteboard."

**Action:**
- Read @whiteboard-strategy.png
- Display the image for the learner

**Say:** "Before we process anything, let's evaluate the image quality. This matters because extraction accuracy depends heavily on what Claude Code can actually see."

**Action:**
- Walk through the image quality assessment with the learner

**Say:** "Notice a few things. There's some glare on the right side from the window - that's going to affect readability. We have multiple handwriting styles - Flora's is clear, Hodl's is... challenging. There are sticky notes overlapping content. And the blue marker has faded in one section."

**Say:** "Angus's observation: 'Whiteboard wisdom, about to be wiped. Flora's handwriting - no problem. Hodl's... we'll do our best. That squiggle could be Q2 or Q4 or possibly a small drawing of a penguin.'"

**Action:**
- Type: "What text can you read in this image? Start with what's clearly visible."
- Wait for Claude to do initial text extraction
- Show the learner the results

**Say:** "Claude Code identified what's clearly visible. Now let's see where it struggles - that tells us where we need to supplement with our own memory or ask for clarification."

**Check:** "Can you see how image quality directly affects what we can extract? Better photos mean better results. When you have time, take photos from multiple angles."

---

### Step 3: Process Together (15-18 min)

**Say:** "Let's process this systematically. First, we'll add context - Claude Code interprets visual content better when it knows what it's looking at."

**Action:**
- Type: "This is a photograph of a strategy whiteboard from a business planning session. The team was discussing customer segments, value propositions, competitive positioning, and a quarterly roadmap. With this context, what can you extract from each section of the whiteboard?"
- Wait for Claude to process with context
- Compare to the previous extraction

**Say:** "See the difference? Context improved the interpretation. 'SME' makes sense as a customer segment now, rather than just letters on a board."

**Say:** "Now let's go beyond text extraction. Whiteboards often have structure - diagrams, relationships, hierarchies."

**Action:**
- Type: "Describe the diagram structures in this whiteboard. What boxes are connected? What does the 2x2 matrix in the middle appear to represent? How is the quarterly roadmap laid out?"
- Wait for Claude to describe structures
- Show the learner the structural interpretation

**Say:** "Claude Code is interpreting relationships, not just reading text. The arrows between customer segments suggest a progression or priority. The 2x2 matrix is a competitive positioning grid."

**Action:**
- Type: "Extract the quarterly roadmap from the bottom left of the whiteboard. Present it as a timeline with Q1, Q2, Q3, and Q4 milestones."
- Wait for Claude to extract the roadmap
- Show the learner the formatted roadmap

**Say:** "Excellent. Now let's find the action items - those are crucial for follow-through."

**Action:**
- Type: "Extract all action items visible on the whiteboard. Include the owner initials and any deadlines where visible. Note any items that are partially obscured or unclear."
- Wait for Claude to extract action items
- Show the learner the results with uncertainty notes

**Say:** "See how it flagged the item affected by glare? That's honest extraction - acknowledging what it couldn't read rather than guessing."

**Check:** "Do you see how different requests yield different outputs? 'Read the text' gives you words. 'Describe the diagram structure' gives you relationships. 'Extract action items' gives you accountability."

---

### Step 4: Handling Uncertainty (8-10 min)

**Say:** "Let's address the areas where Claude Code struggled. This is where human knowledge supplements AI extraction."

**Action:**
- Type: "Which sections of this whiteboard are you least confident about? What specific items are unclear or partially visible?"
- Wait for Claude to identify uncertain areas
- Show the learner the uncertainty list

**Say:** "Angus was in the meeting. He knows that 'Q2' vs 'Q4' question is actually Q2 - they discussed launching in spring. That's human context that the image alone can't provide."

**Say:** "Let's add that context to create a complete record."

**Action:**
- Type: "The unclear 'Q2/Q4' item in the roadmap should be Q2 - the team discussed a spring launch. The partially obscured action item by the glare relates to investor deck preparation, owned by Flora. With these additions, create a complete structured summary of the whiteboard content."
- Wait for Claude to create the supplemented summary
- Show the learner the complete output

**Say:** "This is the pattern: extract what's visible, identify what's uncertain, supplement with known context. The result is more accurate than either AI or memory alone."

**Check:** "Does it make sense how human context fills the gaps that image quality creates? You're not replacing Claude Code's extraction - you're completing it."

---

### Step 5: Creating Structured Output (10-12 min)

**Say:** "Now let's create properly structured documentation from this whiteboard content."

**Action:**
- Type: "Create a whiteboard-notes.md document that structures the content from this strategy session. Organise it into clear sections: Customer Segments, Value Proposition, Competitive Positioning, Quarterly Roadmap, and Action Items. Add YAML frontmatter with title, date, type, tags, and a note that this was extracted from a photograph."
- Wait for Claude to create the structured notes
- Show the learner the complete document

**Present it like this:**

```yaml
---
title: Strategy Session Whiteboard Notes
date: 2024-04-22
type: meeting-notes
status: final
source: whiteboard-strategy.png
tags:
  - strategy
  - planning
  - roadmap
extraction-notes: Some content supplemented from attendee memory due to image quality issues
---
```

**Say:** "Notice the extraction-notes field in the metadata. Anyone reading this knows some content was supplemented from memory, not purely extracted from the image."

**Say:** "Let's also create a separate action items document for tracking."

**Action:**
- Type: "Create a strategy-action-items.md document listing all action items from the whiteboard as a checklist. Include owner, deadline, and current status. Format for progress tracking."
- Wait for Claude to create the action tracker
- Show the learner the result

**Say:** "Now the ephemeral whiteboard content exists as permanent, searchable documentation."

---

### Step 6: Practice (8-10 min)

**Say:** "Let's practice with some specific extraction challenges."

**Say:** "Challenge 1: Create a competitive positioning summary from the 2x2 matrix. What are the axes? Where does GrowthPath sit relative to competitors?"

**Action:**
- Wait for the learner to request the positioning summary
- Review their output

**Say:** "Challenge 2: Extract the value proposition bullets and format them as a marketing one-pager suitable for the investor meeting."

**Action:**
- Wait for the learner to request the value proposition extraction
- Review their output

**Say:** "Challenge 3: Identify any content that appears crossed out or modified. What was changed during the session?"

**Action:**
- Wait for the learner to explore revision history
- Review their output

**Check:** "These different extractions serve different purposes - strategic analysis, marketing material, decision archaeology. Same whiteboard, multiple useful outputs."

---

### Step 7: Image Capture Best Practices (5 min)

**Say:** "Before we wrap up, let's discuss how to capture better images in the first place."

**Say:** "Lighting matters most. Even, diffuse light is ideal. Avoid direct flash - it creates glare. Natural light from windows can cause reflections, so angle yourself to avoid them."

**Say:** "Angle is second. Photograph straight-on when possible. Angled shots distort text and make extraction harder. If the whiteboard is large, take multiple overlapping photos."

**Say:** "Coverage is third. Ensure all content is visible and in focus. Check your photos immediately - it only takes a moment to retake a blurry shot."

**Say:** "Angus's rule: 'Capture before anyone erases. Better to have an imperfect photo than a perfect memory that fades.'"

---

### Step 8: Wrap-up and Module Celebration (5-7 min)

**Say:** "Brilliant work! You've completed the final lab of Module 2. Let's celebrate what you've accomplished."

**Say:** "In this lab alone, you've transformed ephemeral whiteboard content into permanent documentation. You've extracted text, interpreted diagrams, handled uncertainty, and created structured outputs."

**Say:** "But look at Module 2 as a whole. You've processed:"

**Say:** "Word documents - extracted and structured content from business documents."
**Say:** "PowerPoint presentations - mined insights from accumulated slides."
**Say:** "Excel spreadsheets - transformed messy data into reliable analysis."
**Say:** "Meeting transcripts - converted conversations into actionable documentation."
**Say:** "Visual content - captured physical-world knowledge before it disappeared."

**Say:** "GrowthPath's chaos has become organised, searchable knowledge. Every piece of accumulated data now exists in processed, usable form."

**Say:** "The key insight from this lab: visual content previously trapped in photos nobody looks at again can become searchable, structured knowledge. The limitation - imperfect extraction - is part of the learning. AI augments human review; it doesn't replace it."

**Say:** "Angus's reflection: 'Fifteen minutes before the cleaner arrived. Two hours of strategy work, captured and processed. This is what preparation looks like.'"

{ifLastInModule:**Say:** "You've completed Module 2: Processing Data! The investor meeting is tomorrow. GrowthPath is ready. Take a well-deserved break. When you're ready, Module 3 awaits - we'll transform this processed foundation into professional outputs: the investor deck, client proposals, and business forecasts. Type `/CC.m3.lb1` to begin Module 3."}

---

## Common Questions & Answers

**Q: What image formats does Claude Code support?**
A: Common formats like PNG, JPG, and JPEG work well. The Read tool handles image files directly. Ensure files aren't corrupted and are reasonably sized - very large files may process slowly.

**Q: How do I handle a whiteboard with handwriting that's hard to read?**
A: Be explicit about uncertainty in the output. Ask Claude Code to note sections that are unclear. Review and correct the extraction while the whiteboard content is still fresh in your memory - your recall supplements the AI's interpretation.

**Q: Can Claude Code process screenshots of software interfaces?**
A: Yes, and quite well. Screenshots typically have clean, typed text that extracts reliably. Claude Code can also describe UI elements, layouts, and visible functionality - useful for documenting systems.

**Q: What about processing scanned documents?**
A: Scanned documents process similarly to images. High-resolution scans with clear text work best. For formal documents with extensive text, check whether the original digital file exists - it would process more reliably.

**Q: Can Claude Code read text in different languages?**
A: Yes, Claude Code has multilingual capabilities. However, handwriting recognition is more challenging in non-Latin scripts. Printed text in major languages processes reliably.

---

## Success Criteria

- [ ] Learner can evaluate image quality before processing and predict likely challenges
- [ ] Learner invoked Claude Code's vision capabilities to extract text from the photograph
- [ ] Learner provided context that improved interpretation of visual content
- [ ] Learner requested both text extraction and diagram structure interpretation
- [ ] Learner supplemented AI extraction with manual context and corrections
- [ ] Learner verified extracted content against original image
- [ ] Learner archived both original image and processed text for future reference
- [ ] Learner can articulate best practices for image capture

---

## Eureka Moment

> "It actually read Hodl's handwriting! Well... most of it. But that's more than I expected!"
