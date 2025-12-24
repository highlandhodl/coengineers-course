# Lab 2.3: Excel - Case Study Context

## Where We Are in the Story

| Field | Value |
|-------|-------|
| Module | 2 - Processing Data |
| Lab | 2.3 - Excel |
| Scenario Phase | Foundation to Processed |

---

## What Just Happened

Labs 2.1 and 2.2 transformed customer notes and pitch deck content into structured, searchable markdown. The team now has clarity on their customer relationships and messaging.

But the investor meeting is in three days, and the hardest challenge remains: the financial data.

---

## Current Situation

The pitch deck references revenue projections. The customer notes mention deal values. But neither can be verified without understanding the actual pipeline data.

Hodl has been tracking opportunities in a spreadsheet. Every time he has a conversation, he adds a row. Every time something changes, he updates a cell. The result is six months of data accumulated in the least systematic way possible.

**Urgency**: Critical - three days until investor meeting
**Deadline**: Board presentation to potential angel investors
**Stakes**: The investors will ask about pipeline health, conversion rates, and revenue projections. If the numbers don't add up - or if GrowthPath can't explain them confidently - credibility evaporates.

---

## Key Artifacts for This Lab

### Inputs

| Artifact | File | Description |
|----------|------|-------------|
| Customer Pipeline | @customer-pipeline.xlsx | Sales tracking spreadsheet with 25-30 opportunities, inconsistent data entry, mixed formats, some #REF! errors |

### Outputs

| Artifact | File | Description |
|----------|------|-------------|
| Pipeline Insights | pipeline-insights.md | Comprehensive narrative analysis with key findings, notable opportunities, data quality notes, and verification status |
| Executive Summary | pipeline-summary.md | Condensed version suitable for investor presentation slide |

---

## Persona Focus: Angus Chalmers

**Role**: Operations Manager & Technical Lead
**Challenge**: Transform inherited spreadsheet chaos into reliable analysis for investor conversations

### Background Relevant to This Lab

Angus has a developer's instinct for data quality. He can see the spreadsheet is unreliable - but he doesn't have time to rebuild it from scratch. The investor meeting is in three days. What he needs is honest analysis that acknowledges limitations while extracting what value exists.

His background in financial systems makes him particularly sensitive to incorrect numbers. He's seen projects fail because someone trusted a calculation that was wrong. "Aye, but have we tested that properly?" isn't paranoia - it's experience.

### Internal Monologue

*"Spreadsheet archaeology, then. Three different date formats in the first column alone. Some values with pound signs, some without. And what's '50K' supposed to mean exactly - is that fifty thousand or something else?"*

*"The thing about spreadsheets is they look precise. Numbers in neat columns. But the precision is an illusion if the data entry was chaos. Rubbish in, rubbish out."*

*"Still, there's useful information in here. If Claude Code can normalise the formats and give me a narrative summary, I can at least verify the key numbers. Better than presenting the spreadsheet itself and watching investors' eyes glaze over."*

*"Aye, but I'll need to spot-check everything it tells me. Trust but verify."*

### What They Need From You

Angus needs help generating narrative insights from messy data. He wants analysis that acknowledges data quality issues honestly. He specifically needs outputs suitable for investor conversations - not technical data descriptions.

---

## Connection to Learning

### How This Scenario Connects to Objectives

| Learning Objective | Scenario Connection |
|-------------------|---------------------|
| Describe data vs. information vs. insight | Angus needs insight for investors, not a data summary |
| Apply xlsx skill with business context | Generic analysis is useless; specific questions yield useful answers |
| Analyse AI insights critically | Verification is essential before presenting to investors |

### Why This Matters

Spreadsheet analysis is universal. Every business has data in spreadsheets. Every meeting where data matters requires interpretation. The ability to transform numbers into narrative - honestly, with appropriate caveats - is a superpower.

For GrowthPath specifically, this analysis determines whether they can speak confidently about their pipeline to investors.

---

## What Comes Next

With documents, presentations, and now spreadsheet data processed, one input type remains: the meeting transcripts.

Lab 2.4 tackles the customer discovery call - the raw Zoom transcript from the DataFlow Solutions conversation that created one of the biggest opportunities in this very pipeline. Processing that transcript will verify whether the commitments match what's recorded in the spreadsheet.

---

## The Spreadsheet Details

The customer-pipeline.xlsx contains approximately 28 opportunities with the following columns:

- **Company** - Customer name (inconsistent capitalisation, some abbreviations)
- **Contact** - Primary contact name
- **Value** - Potential annual contract value (mixed formats: £50,000, 50K, 50000)
- **Stage** - Sales stage (inconsistent naming: Initial Contact, First Call, Discovery, Proposal, Negotiation, Closed Won, Closed Lost)
- **Probability** - Win probability percentage (some missing)
- **Expected Close** - Expected close date (mixed formats: 15/03/24, March 15, 2024, 2024-03-15)
- **Owner** - Team member responsible (Hodl, Flora, Angus)
- **Last Activity** - Date of last contact
- **Notes** - Free-form notes (often cryptic)

Known data quality issues:
- Three different date formats
- Value column has currency symbols, K notation, and bare numbers
- Some probability cells are empty
- Stage names vary (some abbreviated, some full)
- One #REF! error in a formula
- Duplicate entry for one customer (different stages)

Key opportunities for lab discussion:
- **Highland Outdoor Stores** - Closed Won, £9,500
- **DataFlow Solutions** - Proposal stage, £52,000, 60% probability
- **Edinburgh Events Ltd** - Discovery, £15,000, 40% probability
- **Forth Valley Fabrication** - Negotiation, £18,000, 70% probability
