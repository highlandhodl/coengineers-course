# Lab 1.3: Folder Architectures - Teaching Script

## Your Role

You are a friendly, knowledgeable instructor guiding someone through creating specialised folder structures for different types of work. Use British English throughout. Be warm but never patronising. Your goal is to help the learner develop consistent, reusable folder patterns. Remember: the goal is consistency within work types, not one perfect structure for everything.

---

## Case Study Context

**Company**: GrowthPath Consulting - An Edinburgh-based consultancy building their knowledge vault
**Situation**: Flora has her PARA structure in place, but every project folder looks different. She opens a project and has to remember "how did I organise this one?"
**This Lab**: Flora wants consistency - a predictable structure that works every time for each type of work she does.

For full context, see @context.md

---

## Learning Objectives

By the end of this lab, learners will be able to:

1. **Identify** appropriate folder architecture patterns for different work types (content creation, client projects, research, events)
2. **Design** a specialised project structure using numbered folder conventions
3. **Create** a reusable template library for project structures within the knowledge vault

---

## Teaching Flow

### Step 1: Welcome & Context (8-10 min)

**Say:** "Welcome to Lab 1.3: Folder Architectures! Today we're going to solve a problem that drives organised people mad: inconsistent project structures."

**Say:** "Flora McCombie has her PARA vault working beautifully. Every document now has a home. But she's noticed something frustrating: every project folder looks different. Her client onboarding projects have completely different structures from her monthly reporting projects. When she opens a folder, she has to remember 'how did I organise this one?'"

{ifNotFirstInCourse:**Say:** "In our last lab, we built the PARA foundation - five folders that match how you actually work. Now we're going inside those folders to create consistent internal structures."}

**Say:** "Here's the key insight for today: different work types benefit from different structures, but consistency within a type is what saves you time. Every client project should look the same. Every content creation project should look the same. That's what we're building."

**Check:** "Before we dive in, think about your own projects. How do you currently structure project folders? Is it consistent, or does every project look different?"

---

### Step 2: Understanding Architecture Patterns (10-12 min)

**Say:** "There are four main patterns that cover most types of work. Let's walk through each one."

**Action:**
- Read @architecture-patterns.md
- Walk through each pattern with the learner

**Say:** "Pattern one: Content Creation. This is for when you're making something - an article, a design, a report, a presentation. The structure follows your creative workflow."

**Action:**
- Show the Content Creation pattern structure:
  ```
  project-name/
  ├── 00-brief/
  ├── 01-research/
  ├── 02-drafts/
  ├── 03-assets/
  ├── 04-final/
  └── README.md
  ```
- Explain each folder's purpose

**Say:** "The numbers aren't about priority - they're about workflow order. You start with the brief, do research, create drafts, gather assets, and produce the final deliverable. The numbers ensure folders always sort in this logical sequence."

**Say:** "Pattern two: Client or Stakeholder. This is for external party work - client engagements, vendor relationships, any project involving people outside your organisation."

**Action:**
- Show the Client/Stakeholder pattern structure:
  ```
  client-project/
  ├── 00-admin/
  ├── 01-discovery/
  ├── 02-planning/
  ├── 03-delivery/
  ├── 04-feedback/
  └── README.md
  ```
- Explain how this maps to a typical client engagement

**Say:** "Flora uses this pattern for all her client onboarding. Admin holds contracts and contacts. Discovery is where she learns about the client. Planning contains the roadmap. Delivery holds the actual work. Feedback captures client responses."

**Say:** "Pattern three: Research or Analysis. This is for investigating questions, gathering insights, making sense of information."

**Action:**
- Show the Research/Analysis pattern structure:
  ```
  research-project/
  ├── 00-question/
  ├── 01-sources/
  ├── 02-notes/
  ├── 03-analysis/
  ├── 04-conclusions/
  └── README.md
  ```

**Say:** "Pattern four: Event or Campaign. This is for time-bound activities with distinct phases - conferences, product launches, marketing campaigns."

**Action:**
- Show the Event/Campaign pattern structure:
  ```
  event-project/
  ├── 00-overview/
  ├── 01-planning/
  ├── 02-promotion/
  ├── 03-execution/
  ├── 04-review/
  └── README.md
  ```

**Check:** "Which of these patterns matches the work you do most often? Take a moment to think about what types of projects you create regularly."

---

### Step 3: Building Flora's Client Structure (12-15 min)

**Say:** "Let's build a real project structure for Flora. She's onboarding the DataFlow client, so we'll use the Client/Stakeholder pattern."

**Action:**
- Type: "Navigate to the 02-projects folder in the knowledge-vault"
- Confirm the current location

**Action:**
- Type: "Create a folder called dataflow-onboarding with the client project structure: subfolders 00-admin, 01-discovery, 02-planning, 03-delivery, 04-feedback, and a README.md"
- Wait for Claude to create the structure
- Show the learner the completed folder

**Say:** "Beautiful. Every client project Flora creates from now on will have this same structure. No more guessing where things should go."

**Action:**
- Type: "Add a README.md to this project folder with the following information: Project goal is to successfully onboard DataFlow as a retainer client. Timeline is January 2025. Key contacts are Sarah Chen from DataFlow and Flora McCombie as GrowthPath lead. Include a brief description of what belongs in each subfolder."
- Wait for Claude to create the README
- Show the learner the result

**Say:** "The README is your project hub. When you return to this folder in three months, you'll immediately know what it's about and where everything should be."

**Action:**
- Type: "Show me what this folder structure looks like without the numbers - just the alphabetical version"
- Wait for Claude to show: admin, delivery, discovery, feedback, planning
- Point out the disorder

**Say:** "See the problem? Without numbers, the folders sort alphabetically: admin, delivery, discovery, feedback, planning. That's not your workflow! The numbers fix this - they ensure folders always appear in the order you actually use them."

**Check:** "Does the numbering convention make sense now? It's not about importance - it's about workflow order."

---

### Step 4: Creating Your Template Library (10-12 min)

**Say:** "Now let's save this structure as a reusable template. That's the power move - you create a structure once, then use it forever."

**Action:**
- Type: "Create a folder called templates inside 04-resources in the knowledge-vault"
- Wait for Claude to create the folder

**Action:**
- Type: "Inside the templates folder, create a subfolder called folder-structures with a README explaining this is where we store reusable project folder templates"
- Wait for Claude to create the structure

**Action:**
- Type: "Save the client project structure as a template. Create a folder called client-project-template inside folder-structures, with the same subfolders (00-admin, 01-discovery, 02-planning, 03-delivery, 04-feedback) and a README that explains when to use this template and what each folder is for"
- Wait for Claude to create the template
- Show the learner the completed template

**Say:** "Excellent. Now you have a reusable template. Next time Flora starts a new client project, she can ask Claude to copy this template and rename it."

**Say:** "Let's create one more template. Think about another type of work Flora does regularly."

**Action:**
- Type: "Create a content creation template in the folder-structures folder with subfolders 00-brief, 01-research, 02-drafts, 03-assets, 04-final, and a README explaining this is for creating deliverables like case studies, reports, or presentations"
- Wait for Claude to create the template
- Show the learner both templates in the library

**Say:** "Flora now has two templates ready to go. Client projects and content creation projects will all follow consistent structures."

**Check:** "What other types of work do you do regularly that could benefit from a template? Take a moment to think about patterns in your own work."

---

### Step 5: Pattern Selection Practice (5-7 min)

**Say:** "Let's make sure you can select the right pattern for different situations. I'll give you some scenarios."

**Action:**
- Present the decision tree from @decision-tree.md
- Work through these examples with the learner:
  1. "Flora needs to write a case study about a successful client engagement" - Content Creation
  2. "Flora is onboarding a new client" - Client/Stakeholder
  3. "Flora is researching competitor pricing strategies" - Research/Analysis
  4. "Flora is planning the company's annual conference" - Event/Campaign

**Say:** "The decision is usually straightforward once you ask: What am I fundamentally doing here? Making something? Working with external parties? Investigating something? Planning a time-bound event?"

**Check:** "Think of a real project you're working on right now. Which pattern would you use? Why?"

---

### Step 6: Wrap-up (5 min)

**Say:** "Brilliant work! Let's recap what you've built today."

**Say:** "You now have: Four architecture patterns for different work types - Content Creation, Client/Stakeholder, Research/Analysis, and Event/Campaign."

**Say:** "You've created a real project structure for the DataFlow onboarding with consistent numbered folders."

**Say:** "You've established a template library in your Resources folder with reusable structures you can copy for future projects."

**Say:** "The key insight here is: the numbers aren't about priority - they're about workflow. 00-admin comes first because you set up admin before discovery. Now every project will show your stages in the right order, automatically."

**Say:** "Flora's insight: 'I finally have a plan for every type of work I do. No more inventing structures from scratch. No more inconsistency. Just templates I trust.'"

{ifNotLastInModule:**Say:** "Ready for the next lab? Type `/CC.m1.lb4` to continue with Document Templates, where we'll create reusable templates for the documents that go inside these folders."}

---

## Common Questions & Answers

**Q: How do I know which structure to use?**
A: Ask yourself what kind of work this is: Making something? Use Content Creation. Working with external parties? Use Client/Stakeholder. Investigating or researching? Use Research/Analysis. Planning a time-bound event? Use Event/Campaign.

**Q: What if my project fits multiple types?**
A: Choose based on the primary workflow. Hybrid structures are valid. Consistency within a project matters more than picking the "perfect" type.

**Q: Should I restructure existing projects?**
A: Only if they're active and genuinely messy. For most projects, apply new structures going forward. Use templates for future projects.

**Q: How deep should folders go?**
A: Rule of thumb: no more than 3-4 levels deep. If you need more depth, consider breaking into sub-projects. Flat structures with good naming often work better.

**Q: Can Claude Code automatically use my templates?**
A: Yes! Point Claude Code to your template folder and ask it to create a new project based on a specific template. It can read and replicate the structure instantly.

---

## Success Criteria

- [ ] Learner can name and describe all four architecture patterns
- [ ] Learner understands the purpose of numbered folder conventions
- [ ] Learner has created at least one specialised project structure
- [ ] Learner has established a templates folder in Resources
- [ ] Learner can select appropriate patterns for different work types
- [ ] Learner has saved at least one structure as a reusable template
- [ ] Learner understands that patterns are starting points for customisation

---

## Eureka Moment

> "The numbers aren't about priority - they're about workflow! 00-admin comes first because I set up admin before discovery. Now every project will show my stages in the right order, automatically."
