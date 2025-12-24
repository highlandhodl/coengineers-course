# Document Template Guide

## What Makes a Template Effective?

An effective template does three things:
1. **Structures** your thinking so you don't have to decide on format each time
2. **Prompts** you to include things you might otherwise forget
3. **Speeds up** document creation without sacrificing quality

The goal: templates that feel like helpful guides, not rigid constraints.

---

## The Five Components of an Effective Template

### 1. Metadata

Information about the document itself. Lives at the top.

**What to include:**
- Date created
- Author
- Status (Draft, Review, Final)
- Version (if applicable)
- Project or client name (if relevant)

**Example:**
```markdown
---
Date: 2025-01-15
Author: Flora McCombie
Status: Draft
Project: DataFlow Onboarding
---
```

---

### 2. Purpose Statement

One or two sentences explaining what this document achieves.

**Why it matters:** Keeps you focused on the document's intent. Prevents scope creep. Helps future readers understand what they're looking at.

**Example:**
```markdown
## Purpose
This document captures key decisions, action items, and discussion points from team meetings to ensure accountability and shared understanding.
```

---

### 3. Sections with Clear Structure

The main content areas of your document, organised logically.

**Best practices:**
- Use numbered sections for documents with a clear sequence
- Use headers for documents where sections can be read independently
- Keep sections focused - one main topic each
- Consider the natural flow: what comes first, what follows

**Example:**
```markdown
## 1. Meeting Details
## 2. Attendees
## 3. Agenda
## 4. Discussion Notes
## 5. Decisions Made
## 6. Action Items
## 7. Next Steps
```

---

### 4. Instructions

Guidance for completing each section. Written in square brackets.

**What good instructions include:**
- What information to capture
- How much detail to provide
- Any specific format to follow
- When to skip a section

**Types of instructions:**

| Type | Format | Example |
|------|--------|---------|
| Required field | [Required: ...] | [Required: Date and time] |
| Optional field | [Optional: ...] | [Optional: Video call link if remote] |
| Guidance | [Note: ...] | [Note: Limit to 3-5 key points] |
| Decision prompt | [Choose: A or B] | [Choose: In person / Remote / Hybrid] |

**Example:**
```markdown
## Attendees
[List all attendees with their roles. Include who was absent but invited.]

| Name | Role | Present? |
|------|------|----------|
| [Name] | [Role] | [Yes/No] |
```

---

### 5. Examples

Sample content showing what good looks like.

**Why examples work better than instructions alone:**
- They clarify ambiguity
- They set expectations for quality and length
- They make templates faster to use (adapt rather than create)

**How to mark examples:**
- Use "[Example: ...]" format
- Or include a separate "Example" block to delete after use
- Always make it clear that examples should be replaced

**Example:**
```markdown
## Action Items
[List all action items with owner and due date. Be specific about what needs to happen.]

| Action | Owner | Due Date | Status |
|--------|-------|----------|--------|
| [Example: Send proposal draft to client] | [Example: Flora] | [Example: 2025-01-20] | [Pending] |
| [Delete example rows and add actual items] | | | |
```

---

## Template Design Principles

### Start Simple
Begin with minimal sections. Add complexity only when you find yourself consistently adding the same things manually.

### Include Optional Sections
Mark sections as optional rather than requiring everything. Use "[Optional: Delete if not applicable]" liberally.

### Build in Decision Points
Good templates help you decide, not just record. Include prompts like "[Choose: ...]" for common decisions.

### Make Templates Self-Documenting
Instructions should be clear enough that someone unfamiliar with your system could use the template.

### Design for Modification
Templates are starting points. Use language that encourages customisation: "Adapt as needed" rather than "Complete all fields."

---

## Common Template Types

### Meeting Documentation
- Meeting notes
- Agendas
- One-to-one records
- Workshop facilitation guides

### Project Management
- Project briefs
- Status updates
- Retrospectives
- Decision logs

### Client Communication
- Onboarding checklists
- Progress reports
- Feedback requests
- Handover documents

### Content Creation
- Blog post outlines
- Case study structures
- Report frameworks
- Proposal templates

### Personal Productivity
- Daily planning
- Weekly reviews
- Goal tracking
- Learning logs

---

## Template Lifecycle

### Creation
1. Identify a document you create 3+ times
2. Draft a basic structure
3. Add instructions and examples
4. Test on a real document

### Refinement
1. Use the template several times
2. Note what you always add or remove
3. Update the template based on patterns
4. Version your templates (v1, v2, etc.)

### Retirement
1. Recognise when a template isn't being used
2. Archive rather than delete
3. Create new templates for evolved needs

---

## Naming Conventions

Use a consistent naming pattern for all templates:

```
[type]-[name]-template.md
```

**Examples:**
- meeting-notes-template.md
- project-brief-template.md
- client-onboarding-template.md
- weekly-update-template.md

This makes templates easy to find and sort together.

---

## Template Quality Checklist

Before finalising a template, verify:

- [ ] Metadata section is present with relevant fields
- [ ] Purpose statement is clear and concise
- [ ] Sections are logically ordered
- [ ] All sections have instructions
- [ ] Examples are included where helpful
- [ ] Optional sections are clearly marked
- [ ] Template is tested on a real document
- [ ] Naming follows the convention
