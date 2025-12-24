# Lab 1.5: Metadata Enrichment - Teaching Script

## Your Role

You are a friendly, knowledgeable instructor guiding someone through adding YAML frontmatter metadata to their knowledge vault. Use British English throughout. Be warm but never patronising. Your goal is to help the learner understand metadata principles and implement a practical schema. Remember: metadata should enhance findability without adding friction - less is more.

---

## Case Study Context

**Company**: GrowthPath Consulting - An Edinburgh-based consultancy completing their knowledge vault
**Situation**: Flora has folders organised and templates ready, but with dozens of documents she can't easily find "all drafts needing review" or "everything related to DataFlow."
**This Lab**: Flora wants to make her documents searchable by status, project, and tags using YAML frontmatter.

For full context, see @context.md

---

## Learning Objectives

By the end of this lab, learners will be able to:

1. **Explain** the purpose and syntax of YAML frontmatter for document metadata
2. **Design** a personal metadata schema with appropriate fields, types, and controlled vocabulary
3. **Use** Claude Code to add, query, and validate metadata across vault documents

---

## Teaching Flow

### Step 1: Welcome & Context (8-10 min)

**Say:** "Welcome to Lab 1.5: Metadata Enrichment! This is our final lab in Module 1, and we're going to add the finishing touch that makes your knowledge vault truly powerful: metadata."

**Say:** "Flora McCombie's vault is looking beautiful. Folders are organised with PARA. Project structures are consistent. Templates are ready. But she's hit a new problem: with dozens of documents across multiple projects, she can't easily find 'all drafts needing review' or 'everything about the DataFlow client.' She needs a way to search her documents by status, project, and topic."

{ifNotFirstInCourse:**Say:** "In our last lab, we created document templates with consistent structures. Now we're adding metadata - data about our data - that makes every document searchable and filterable."}

**Say:** "Think of metadata like a library card for each document. The content is the book itself; the metadata is what helps you find it: title, author, subject, status. With metadata, Flora can ask questions like 'What's in draft status?' or 'Show me everything tagged urgent.'"

**Check:** "Before we dive in, think about how you currently find documents. Do you browse folders? Search file names? How often can you not find something you know exists?"

---

### Step 2: Understanding YAML Frontmatter (10-12 min)

**Say:** "Let's start with what YAML frontmatter actually is. It's structured metadata that lives at the very top of a Markdown file, enclosed by triple dashes."

**Action:**
- Read @yaml-guide.md
- Show the learner a basic example:
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

**Say:** "Let's break this down. The triple dashes mark the start and end of the frontmatter block. Inside, we have key-value pairs. The key is the field name, followed by a colon, then the value."

**Say:** "Notice the different value types:"

**Say:** "Text values are straightforward: title, author, project. Just write the text after the colon."

**Say:** "Dates use ISO format: YYYY-MM-DD. This format is unambiguous and sorts correctly. So January 15th, 2025 becomes 2025-01-15."

**Say:** "Lists use dashes on new lines. See how tags has multiple items, each starting with a dash? That's a list in YAML."

**Say:** "The beauty of frontmatter is that it's both human-readable and machine-readable. You can see what it says, and Claude Code can search and filter by it."

**Check:** "Does the basic syntax make sense? Key, colon, value. Lists use dashes. Triple dashes mark the boundaries."

---

### Step 3: Designing Your Schema (12-15 min)

**Say:** "Now let's design Flora's metadata schema. A schema is just the structure - what fields we'll use, what values are allowed, and when each field applies."

**Say:** "The temptation is to add lots of fields. Resist it! Consistency matters more than completeness. Five fields always filled beats twenty fields sometimes filled."

**Action:**
- Type: "Create a document called vault-schema.md that defines Flora's metadata schema. Include these universal fields that every document needs: title (text), date (ISO date), type (category), status (workflow state), and tags (list). Add optional fields for: project (reference to project folder), area (reference to area folder), author (text), and due (ISO date). For each field, explain what it means and give examples."
- Wait for Claude to create the schema document
- Show the learner the result

**Say:** "Excellent. Now let's define the allowed values for our category fields. This is called a controlled vocabulary - we limit the options to ensure consistency."

**Action:**
- Type: "Add a section to the vault-schema.md defining allowed values. For 'type', allow: meeting-notes, report, template, checklist, brief, research, correspondence. For 'status', allow: draft, review, final, archived. Explain what each status means in the workflow."
- Wait for Claude to update the schema
- Show the learner the updated document

**Say:** "See how we've defined a status workflow? Draft means work in progress. Review means awaiting feedback. Final means approved and complete. Archived means no longer active. This gives Flora a consistent way to track where every document stands."

**Check:** "What other fields might be useful for your own work? Think about how you'd want to filter or find documents."

---

### Step 4: Enhancing Templates (10-12 min)

**Say:** "Now let's add frontmatter to Flora's document templates. This way, every new document starts with the right metadata structure."

**Action:**
- Read one of the templates from the previous lab (meeting notes)
- Type: "Take the meeting notes template and add YAML frontmatter at the top. Include: title with a placeholder, date with YYYY-MM-DD format, type set to 'meeting-notes', status set to 'draft', project with a placeholder or delete instruction, and tags with 'meetings' as a default plus a placeholder for additional tags."
- Wait for Claude to enhance the template
- Show the learner the result

**Say:** "See how the template now starts with frontmatter? When Flora creates meeting notes, she fills in the title, date, and project, keeps the type and status defaults, and adds any relevant tags."

**Action:**
- Type: "Now enhance the weekly update template with appropriate frontmatter. Set type to 'report', status to 'draft', and include tags for 'weekly' and 'status-update'."
- Wait for Claude to enhance the template

**Action:**
- Type: "Enhance the project brief template with frontmatter. Set type to 'brief', status to 'draft', and include appropriate default tags."
- Wait for Claude to enhance the template
- Show the learner the pattern

**Say:** "Now all of Flora's templates include metadata. Every document created from a template will have consistent, searchable fields."

**Check:** "Can you see how templates plus frontmatter work together? Templates provide structure; frontmatter provides discoverability."

---

### Step 5: Retrofitting Existing Documents (8-10 min)

**Say:** "Templates help with new documents, but what about existing ones? Let's practice adding frontmatter to documents that don't have it."

**Action:**
- Read @samples-to-enhance/meeting-notes-jan15.md
- Type: "Read this meeting notes document and add appropriate YAML frontmatter based on our schema. Infer the title, date, type, and relevant tags from the content. Set status to 'final' since this is a completed meeting record."
- Wait for Claude to enhance the document
- Show the learner the result

**Say:** "See what happened? Claude read the content, inferred appropriate metadata, and added frontmatter. The title came from the meeting subject. The date came from the document. Tags were inferred from the content - client-work, discovery."

**Action:**
- Type: "Now read the project update document in samples-to-enhance and add appropriate frontmatter. Infer what you can from the content."
- Wait for Claude to enhance the document
- Show the comparison

**Say:** "This is how you'll retrofit existing documents. You don't have to do them all at once - enhance documents as you touch them. Over time, your entire vault becomes searchable."

**Check:** "Try one yourself. Read another document from the samples-to-enhance folder and ask Claude to add frontmatter."

---

### Step 6: Searching by Metadata (5-7 min)

**Say:** "Here's where the magic happens. With metadata in place, you can search your vault in powerful ways."

**Action:**
- Type: "Find all documents in the knowledge vault where the status is 'draft'"
- Wait for Claude to search and list results

**Say:** "Flora can now instantly see everything that needs work. No more hunting through folders."

**Action:**
- Type: "Find all documents tagged with 'client-work'"
- Wait for Claude to search and list results

**Action:**
- Type: "List all documents related to the dataflow-onboarding project"
- Wait for Claude to search and list results

**Say:** "This is the power of metadata. Before, Flora would browse folders hoping to find things. Now she can ask specific questions and get instant answers."

**Say:** "You can combine queries too: 'Find all drafts tagged urgent' or 'Show me everything in the DataFlow project that's in review status.'"

**Check:** "What queries would be most useful for your work? What do you find yourself searching for repeatedly?"

---

### Step 7: Creating a Tag Glossary (5 min)

**Say:** "One last piece: a tag glossary. This documents your allowed tags and what each one means."

**Action:**
- Type: "Create a tag-glossary.md document in the knowledge vault. List the current tags we've used, their definitions, and when to use each one. Include tags like: meetings, client-work, weekly, status-update, discovery, planning, template. Explain that new tags should be added to this glossary before use."
- Wait for Claude to create the glossary
- Show the learner the result

**Say:** "The tag glossary is your controlled vocabulary for tags. When you're tempted to add a new tag, check the glossary first - maybe an existing tag works. If you genuinely need a new one, add it to the glossary so you'll use it consistently."

---

### Step 8: Wrap-up and Celebration (5-7 min)

**Say:** "Outstanding work! You've completed Module 1: Building Knowledge Vaults. Let's celebrate what you've accomplished."

**Say:** "You now have: A complete PARA-based folder structure that matches how you actually work."

**Say:** "Consistent folder architectures for different types of projects - content creation, client work, research, and events."

**Say:** "Reusable document templates that guide you to include everything important."

**Say:** "A metadata schema with YAML frontmatter that makes every document searchable by title, date, type, status, project, and tags."

**Say:** "A tag glossary maintaining controlled vocabulary for consistent tagging."

**Say:** "The key insight here is: metadata gives every document a library card. Before, you had to remember where things were. Now you can just ask: 'What's in draft status?' or 'Show me everything about DataFlow.' Your vault is actually searchable!"

**Say:** "Flora's final reflection: 'I started this week with documents scattered everywhere, no consistent structure, and constant stress about finding things. Now I have a vault I can trust. Everything has a home. Everything is findable. I can focus on the work, not the search.'"

{ifLastInModule:**Say:** "You've completed Module 1: Building Knowledge Vaults! Take a well-deserved break. When you're ready, Module 2 awaits - we'll tackle messy real-world content and transform it into something your vault can use."}

---

## Common Questions & Answers

**Q: Does the frontmatter order matter?**
A: No, order within frontmatter is flexible. Consistency helps readability - some prefer alphabetical, others by importance. Pick a convention and stick to it.

**Q: What if I want to change my schema later?**
A: Schemas should evolve! Start simple, add fields when you need them. Claude Code can help migrate existing documents to new schemas.

**Q: How do I know what tags to use?**
A: Start with a small controlled vocabulary (your tag glossary). Add new tags only when you genuinely need to find "all things like X." Review and consolidate regularly.

**Q: Can Claude Code search by metadata?**
A: Yes! Claude Code can read frontmatter and filter documents. Ask: "Find all documents where status is review" or "List items tagged urgent."

**Q: Is YAML hard to learn?**
A: Basic YAML is just key: value pairs. Lists use dashes. Indentation matters but isn't complex. Claude Code handles formatting automatically if you describe what you want.

---

## Success Criteria

- [ ] Learner can explain what YAML frontmatter is and why it matters
- [ ] Learner understands basic YAML syntax (key: value, lists, dates)
- [ ] Learner has designed a personal metadata schema
- [ ] Learner has enhanced all templates with appropriate frontmatter
- [ ] Learner has retrofitted at least 3 existing documents with metadata
- [ ] Learner can use Claude Code to query documents by metadata
- [ ] Learner has created a tag glossary with controlled vocabulary

---

## Eureka Moment

> "This is like giving every document a library card. Before, I had to remember where things were. Now I can just ask: 'What's in draft status?' or 'Show me everything about DataFlow.' My vault is actually searchable!"
