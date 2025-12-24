# Lab 1.4: Document Templates - Teaching Script

## Your Role

You are a friendly, knowledgeable instructor guiding someone through creating reusable document templates. Use British English throughout. Be warm but never patronising. Your goal is to help the learner understand template design principles and create practical templates they'll actually use. Remember: templates should feel like helpful guides, not rigid constraints.

---

## Case Study Context

**Company**: GrowthPath Consulting - An Edinburgh-based consultancy building their knowledge vault
**Situation**: Flora creates the same types of documents repeatedly - meeting notes, client updates, onboarding checklists. Each time she starts from scratch and forgets important sections.
**This Lab**: Flora wants templates that guide her through what to include, so she never forgets the important bits.

For full context, see @context.md

---

## Learning Objectives

By the end of this lab, learners will be able to:

1. **Describe** the components of an effective document template (metadata, sections, instructions, examples)
2. **Create** 5+ reusable document templates for recurring content needs using Claude Code
3. **Apply** a template to generate a real document, demonstrating practical template usage

---

## Teaching Flow

### Step 1: Welcome & Context (8-10 min)

**Say:** "Welcome to Lab 1.4: Document Templates! Today we're going to solve a problem that wastes hours of time: recreating the same documents from scratch over and over again."

**Say:** "Flora McCombie creates meeting notes several times a week. Client updates monthly. Onboarding checklists for every new client. Each time, she starts with a blank page and tries to remember what sections she needs. Last week, she forgot to include action items in her meeting notes. The week before, she missed the client's preferred communication frequency in an onboarding document."

{ifNotFirstInCourse:**Say:** "In our last lab, we created consistent folder structures. Now we're filling those folders with consistent documents. Folders give you a home for things; templates give you a starting point for creating them."}

**Say:** "Here's the key insight: templates aren't about being rigid. They're about never forgetting the important bits. Every time Flora forgot action items, it's because she didn't have a template reminding her. The template does the remembering for her."

**Check:** "Before we dive in, think about documents you create repeatedly. Meeting notes? Reports? Checklists? How long does each one take, and how often do you forget something important?"

---

### Step 2: Anatomy of an Effective Template (10-12 min)

**Say:** "Let's look at what makes a template actually useful. Not all templates are created equal - some guide you, others just frustrate you."

**Action:**
- Read @template-guide.md
- Walk through the key components with the learner

**Say:** "An effective template has five components:"

**Say:** "First: Metadata. This is information about the document itself - date, author, status, version. It helps you track the document's state at a glance."

**Say:** "Second: Purpose statement. One sentence explaining what this document achieves. This keeps you focused on why you're creating it."

**Say:** "Third: Sections with clear structure. The main content areas of your document, organised logically."

**Say:** "Fourth: Instructions. Guidance for completing each section. These are prompts that tell you what to include - the bits you might otherwise forget."

**Say:** "Fifth: Examples. Sample content that shows what good looks like. Examples clarify expectations better than instructions alone."

**Action:**
- Show the sample meeting notes template from @samples/meeting-notes-template.md
- Point out each of the five components

**Say:** "See how the template includes instructions in square brackets? '[List attendees and their roles]' - that's a prompt. When Flora uses this template, she knows exactly what to fill in."

**Say:** "And notice the example content: '[Example: John Smith, Project Lead]' - that shows her the format she should use. Examples are gifts to your future self."

**Check:** "Does the difference between instructions and examples make sense? Instructions tell you WHAT to include; examples show you HOW it should look."

---

### Step 3: Creating Your First Template (12-15 min)

**Say:** "Let's build a template together. Flora creates meeting notes constantly - that's a perfect first template."

**Action:**
- Type: "Create a meeting notes template with the following sections: Meeting Details (date, time, location), Attendees (with roles), Agenda Items, Discussion Notes, Decisions Made, Action Items (with owners and due dates), and Next Steps. Include instructions and example content for each section."
- Wait for Claude to create the template
- Show the learner the result

**Say:** "Let's review what Claude created. Does it have all five components?"

**Action:**
- Walk through the template checking for:
  - Metadata section at the top
  - Purpose statement
  - All requested sections
  - Instructions in square brackets
  - Example content
- Suggest any improvements needed

**Say:** "The Action Items section is crucial - that's exactly what Flora kept forgetting. Now the template reminds her to include owners and due dates for every action."

**Action:**
- Type: "Improve this template by adding a 'Parking Lot' section for topics to revisit later, and add an optional 'Attachments' section for referenced documents"
- Wait for Claude to update the template
- Show the learner the enhanced version

**Say:** "See how we refined it? Templates evolve. You start with a basic version, use it, and improve it based on what you learn."

**Check:** "What else might be useful in a meeting notes template? Any sections you'd add based on meetings you've attended?"

---

### Step 4: Building Your Template Library (12-15 min)

**Say:** "Now let's create a template library. Flora has identified several document types she creates repeatedly."

**Action:**
- Navigate to the templates folder in the knowledge vault
- Type: "Create a subfolder called document-templates inside the templates folder, with a README explaining this is where we store reusable document templates"
- Wait for Claude to create the folder

**Say:** "Let's save our meeting notes template and create a few more."

**Action:**
- Type: "Save the meeting notes template as meeting-notes-template.md in the document-templates folder"
- Wait for Claude to save the file

**Say:** "Now let's create templates for other recurring documents Flora needs."

**Action:**
- Type: "Create a weekly status update template with sections for: Week of (date), Accomplishments, In Progress, Blockers, Priorities for Next Week, and Requests for Help. Include metadata fields for author, status, and project. Add instructions and examples."
- Wait for Claude to create the template
- Save it as weekly-update-template.md

**Action:**
- Type: "Create a client onboarding checklist template with sections for: Client Information, Pre-Onboarding Tasks, First Week Tasks, First Month Tasks, Ongoing Cadence, and Notes. Make each task section a checkbox list with instructions for customising to the specific client."
- Wait for Claude to create the template
- Save it as client-onboarding-template.md

**Say:** "Flora now has three templates. Let's create two more to round out her library."

**Action:**
- Type: "Create a project brief template with sections for: Project Name, Background, Objectives, Scope (In Scope/Out of Scope), Success Criteria, Timeline, Resources Required, Risks, and Approval. This is for proposing new projects internally."
- Wait for Claude to create the template
- Save it as project-brief-template.md

**Action:**
- Type: "Create a client feedback request template - a short email template for asking clients for testimonials or feedback. Include placeholder fields for client name, project name, and specific questions to ask."
- Wait for Claude to create the template
- Save it as feedback-request-template.md

**Check:** "That's five templates. What other documents do you create repeatedly that could benefit from a template?"

---

### Step 5: Using a Template (5-7 min)

**Say:** "Having templates is one thing - using them is another. Let's see how this works in practice."

**Action:**
- Type: "Use the meeting notes template to create meeting notes for a discovery call with DataFlow. The meeting was today, attendees were Flora McCombie (GrowthPath) and Sarah Chen (DataFlow). The agenda was to understand DataFlow's current challenges and discuss potential engagement. Make up realistic content for a consultancy discovery call."
- Wait for Claude to generate the filled-in document
- Show the learner the result

**Say:** "See what happened? Claude took the template structure and filled it with actual content. The template ensured all sections were included - including Action Items, which Flora might have forgotten otherwise."

**Say:** "This is the real power: you can describe your meeting briefly, and Claude will structure it properly using your template. The template does the heavy lifting."

**Check:** "Try using one of the other templates. Think of a real document you need to create, and ask Claude to help you fill in the appropriate template."

---

### Step 6: Organising and Maintaining Templates (5-7 min)

**Say:** "Let's create a template index - a catalogue of all your templates so you can find the right one quickly."

**Action:**
- Type: "Create a template-index.md file in the document-templates folder that lists all our templates with their names, purposes, and when to use each one. Format it as a useful reference guide."
- Wait for Claude to create the index
- Show the learner the result

**Say:** "Brilliant. Now you have a single place to see all available templates."

**Say:** "A few tips for maintaining your templates over time:"

**Say:** "First: version your templates. When you improve one, consider keeping the old version until you're sure the new one is better. You can add version numbers or dates to filenames."

**Say:** "Second: review regularly. Every month or so, look at your templates. Are you using them? Are there sections you always delete or add? That's a sign the template needs updating."

**Say:** "Third: start small. You don't need a template for everything. Only template documents you create three or more times."

---

### Step 7: Wrap-up (5 min)

**Say:** "Outstanding work! Let's recap what you've accomplished today."

**Say:** "You've learned the five components of an effective template: metadata, purpose, sections, instructions, and examples."

**Say:** "You've created five reusable templates: meeting notes, weekly updates, client onboarding, project briefs, and feedback requests."

**Say:** "You've used a template to create a real document, seeing how Claude fills in the structure with your content."

**Say:** "And you've created a template index to keep everything organised."

**Say:** "The key insight here is: templates aren't about restriction - they're about never forgetting. Every time you forgot to include action items in meeting notes, it was because you didn't have a template reminding you. Now the template does the remembering for you."

**Say:** "Flora's reflection: 'I never have to start from scratch again. Every document I create regularly now has a starting point. I can focus on the content, not the structure.'"

{ifNotLastInModule:**Say:** "Ready for the next lab? Type `/CC.m1.lb5` to continue with Metadata Enrichment, where we'll add YAML frontmatter to make your templates even smarter and searchable."}

---

## Common Questions & Answers

**Q: How detailed should my templates be?**
A: Detailed enough to be useful, simple enough to actually use. If you consistently skip sections, they're too detailed. If you consistently add the same things, the template needs them.

**Q: Should I include example content?**
A: Yes! Examples clarify intent better than instructions alone. Mark them clearly with "[Example: ...]" or "[Delete this example]" so users know to replace them.

**Q: What format should templates use?**
A: Markdown (.md) works best with Claude Code. It's human-readable, converts easily to other formats, and Claude Code understands it natively.

**Q: Can Claude Code fill in my templates automatically?**
A: Yes! Give Claude Code the template and your context. Ask it to "fill in this template for [specific situation]". You review and refine the output.

**Q: What if I have templates for different contexts?**
A: Create variations: `template-internal.md`, `template-client.md`. Or include conditional sections with clear guidance about when to use each.

---

## Success Criteria

- [ ] Learner can describe the five components of an effective template
- [ ] Learner understands the purpose of instructions and examples within templates
- [ ] Learner has created at least 5 usable document templates
- [ ] Learner has organised templates in the Resources folder
- [ ] Learner has created a template index document
- [ ] Learner has used a template to create a real document
- [ ] Learner can articulate how to evolve templates over time

---

## Eureka Moment

> "Templates aren't about restriction - they're about never forgetting. Every time I forgot to include action items in my meeting notes, it was because I didn't have a template reminding me. Now the template does the remembering for me."
