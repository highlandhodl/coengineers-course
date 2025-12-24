const pptxgen = require('pptxgenjs');
const fs = require('fs');

// GrowthPath Brand Colors
const FOREST_GREEN = '2D5A3D';
const WARM_GOLD = 'D4A84B';
const SLATE_GREY = '4A5568';
const WHITE = 'FFFFFF';

async function addCaseStudySlide() {
  const pptx = new pptxgen();
  pptx.layout = 'LAYOUT_16x9';
  pptx.author = 'GrowthPath Consulting';
  pptx.title = 'DataFlow Analytics - Strategic Growth Partnership Proposal';

  // ========== RECREATE ALL SLIDES ==========

  // Slide 1: Title
  let slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: FOREST_GREEN } });
  slide.addText('Strategic Growth Partnership', { x: 0.5, y: 1.8, w: 9, h: 1, fontSize: 44, color: WHITE, bold: true, align: 'center' });
  slide.addShape(pptx.shapes.RECTANGLE, { x: 4, y: 2.9, w: 2, h: 0.06, fill: { color: WARM_GOLD } });
  slide.addText('A Proposal for DataFlow Analytics', { x: 0.5, y: 3.2, w: 9, h: 0.6, fontSize: 24, color: WARM_GOLD, align: 'center' });
  slide.addText('Prepared by GrowthPath Consulting', { x: 0.5, y: 4.2, w: 9, h: 0.5, fontSize: 16, color: WHITE, align: 'center' });

  // Slide 2: Understanding Your Challenge
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1, fill: { color: FOREST_GREEN } });
  slide.addText('Understanding Your Challenge', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 28, color: WHITE, bold: true });
  slide.addText("We've listened. Here's what we heard:", { x: 0.5, y: 1.3, w: 9, h: 0.4, fontSize: 20, color: FOREST_GREEN, bold: true });
  slide.addText([
    { text: '• Rapid growth from 12 to 35 people has outpaced your processes\n', options: { bullet: false } },
    { text: "• Knowledge lives in people's heads, not documented systems\n", options: { bullet: false } },
    { text: '• New team member onboarding takes 12 weeks — far too long\n', options: { bullet: false } },
    { text: '• Series B investors will scrutinise your operational maturity', options: { bullet: false } }
  ], { x: 0.5, y: 1.8, w: 9, h: 1.5, fontSize: 14, color: SLATE_GREY, lineSpacing: 24 });
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.6, w: 9, h: 1, fill: { color: FOREST_GREEN }, rectRadius: 0.1 });
  slide.addText('"We\'re brilliant at solving our clients\' data problems. We\'re terrible at solving our own operational ones."\n— Marcus Chen, CEO', { x: 0.7, y: 3.75, w: 8.6, h: 0.7, fontSize: 13, color: WHITE, italic: true, valign: 'middle' });

  // Slide 3: The Cost of Inaction
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1, fill: { color: FOREST_GREEN } });
  slide.addText('The Cost of Inaction', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 28, color: WHITE, bold: true });
  const cardY = 1.4;
  const cardH = 2.8;
  const cards = [
    { title: 'Onboarding Delays', metric: '12 weeks', desc: 'Every new hire takes 3 months to become productive. At your growth rate, that\'s significant lost capacity.' },
    { title: 'Knowledge Risk', metric: 'Single Points', desc: 'Critical knowledge exists only in key people\'s heads. One departure could halt operations.' },
    { title: 'Investor Scrutiny', metric: 'Series B', desc: 'Due diligence will expose operational gaps. Fix them now, or explain them later.' }
  ];
  cards.forEach((card, i) => {
    const x = 0.5 + (i * 3.1);
    slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: cardY, w: 2.9, h: cardH, fill: { color: WHITE }, line: { color: 'E0E0E0', width: 1 } });
    slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: cardY, w: 0.08, h: cardH, fill: { color: WARM_GOLD } });
    slide.addText(card.title, { x: x + 0.2, y: cardY + 0.2, w: 2.5, h: 0.4, fontSize: 14, color: FOREST_GREEN, bold: true });
    slide.addText(card.metric, { x: x + 0.2, y: cardY + 0.7, w: 2.5, h: 0.5, fontSize: 24, color: FOREST_GREEN, bold: true });
    slide.addText(card.desc, { x: x + 0.2, y: cardY + 1.3, w: 2.5, h: 1.3, fontSize: 11, color: SLATE_GREY, valign: 'top' });
  });

  // Slide 4: Our Approach
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1, fill: { color: FOREST_GREEN } });
  slide.addText('Our Approach', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 28, color: WHITE, bold: true });
  slide.addText('A practical, phased methodology that builds lasting capability', { x: 0.5, y: 1.2, w: 9, h: 0.4, fontSize: 18, color: FOREST_GREEN });
  const phases = [
    { num: '1', title: 'Discover', desc: 'Deep-dive into current operations, interview key stakeholders, map critical workflows' },
    { num: '2', title: 'Design', desc: 'Create scalable processes, define ownership, build documentation frameworks' },
    { num: '3', title: 'Deliver', desc: 'Implement changes alongside your team, train leaders, embed new ways of working' },
    { num: '4', title: 'Sustain', desc: 'Handover with full documentation, support transition, ensure independence' }
  ];
  phases.forEach((phase, i) => {
    const x = 0.5 + (i * 2.4);
    slide.addShape(pptx.shapes.OVAL, { x: x + 0.7, y: 1.8, w: 0.6, h: 0.6, fill: { color: FOREST_GREEN } });
    slide.addText(phase.num, { x: x + 0.7, y: 1.85, w: 0.6, h: 0.5, fontSize: 20, color: WHITE, bold: true, align: 'center', valign: 'middle' });
    slide.addText(phase.title, { x: x, y: 2.5, w: 2.2, h: 0.4, fontSize: 14, color: FOREST_GREEN, bold: true, align: 'center' });
    slide.addText(phase.desc, { x: x, y: 2.95, w: 2.2, h: 1.2, fontSize: 11, color: SLATE_GREY, align: 'center', valign: 'top' });
    if (i < 3) {
      slide.addText('→', { x: x + 2.05, y: 1.85, w: 0.4, h: 0.5, fontSize: 24, color: WARM_GOLD, align: 'center' });
    }
  });

  // Slide 5: What You'll Receive
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1, fill: { color: FOREST_GREEN } });
  slide.addText("What You'll Receive", { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 28, color: WHITE, bold: true });
  const deliverables = [
    { title: 'Documentation', items: ['10 critical workflow playbooks', 'Role and responsibility matrix', 'Decision-making frameworks', 'Onboarding programme (4-week)'] },
    { title: 'Strategy', items: ['18-month strategic roadmap', 'Prioritisation framework', 'Series B narrative document', 'Board deck refresh'] },
    { title: 'Capability', items: ['Leadership team coaching', 'Process ownership training', 'Change management support', 'Quarterly review cadence'] }
  ];
  deliverables.forEach((col, i) => {
    const x = 0.5 + (i * 3.1);
    slide.addText(col.title, { x: x, y: 1.3, w: 2.9, h: 0.4, fontSize: 16, color: FOREST_GREEN, bold: true });
    slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.7, w: 2.9, h: 0.04, fill: { color: WARM_GOLD } });
    col.items.forEach((item, j) => {
      slide.addText('• ' + item, { x: x, y: 1.9 + (j * 0.45), w: 2.9, h: 0.4, fontSize: 12, color: SLATE_GREY });
    });
  });

  // Slide 6: Timeline and Milestones
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1, fill: { color: FOREST_GREEN } });
  slide.addText('Timeline and Milestones', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 28, color: WHITE, bold: true });
  const timeline = [
    { month: 'Month 1', phase: 'DISCOVER', color: FOREST_GREEN, milestone: 'Current State Report' },
    { month: 'Month 2', phase: 'DESIGN', color: '3D7A5D', milestone: 'Process Blueprints' },
    { month: 'Month 3', phase: 'DELIVER', color: '4D9A7D', milestone: 'First 5 Playbooks' },
    { month: 'Month 4', phase: 'DELIVER', color: '4D9A7D', milestone: 'Leadership Training' },
    { month: 'Month 5', phase: 'DELIVER', color: '4D9A7D', milestone: 'All 10 Playbooks' },
    { month: 'Month 6', phase: 'SUSTAIN', color: WARM_GOLD, milestone: 'Full Handover' }
  ];
  timeline.forEach((t, i) => {
    const x = 0.5 + (i * 1.55);
    if (i > 0) slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: 1.3, w: 0.02, h: 2.5, fill: { color: WARM_GOLD } });
    slide.addText(t.month, { x: x + 0.1, y: 1.4, w: 1.4, h: 0.3, fontSize: 11, color: SLATE_GREY, align: 'center' });
    slide.addShape(pptx.shapes.RECTANGLE, { x: x + 0.15, y: 1.8, w: 1.25, h: 0.5, fill: { color: t.color }, rectRadius: 0.05 });
    slide.addText(t.phase, { x: x + 0.15, y: 1.85, w: 1.25, h: 0.4, fontSize: 9, color: WHITE, bold: true, align: 'center', valign: 'middle' });
    slide.addText(t.milestone, { x: x + 0.1, y: 2.45, w: 1.4, h: 0.4, fontSize: 10, color: FOREST_GREEN, bold: true, align: 'center' });
  });

  // Slide 7: About GrowthPath
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1, fill: { color: FOREST_GREEN } });
  slide.addText('About GrowthPath', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 28, color: WHITE, bold: true });
  slide.addText('Growth Advisory for Scottish SMEs', { x: 0.5, y: 1.3, w: 6, h: 0.4, fontSize: 18, color: FOREST_GREEN, bold: true });
  slide.addText("We help ambitious Scottish businesses scale smart. Founded by operators who've been in your shoes, we bring practical experience — not theoretical frameworks.\n\nOur approach is hands-on: we work alongside your team, building capability that lasts long after we leave. We measure success by your independence, not your dependency.\n\nWe understand the Scottish business ecosystem — the opportunities, the challenges, and the unique culture of doing business here.",
    { x: 0.5, y: 1.8, w: 6, h: 2.2, fontSize: 12, color: SLATE_GREY, valign: 'top' });
  slide.addShape(pptx.shapes.RECTANGLE, { x: 7, y: 1.2, w: 2.5, h: 3, fill: { color: FOREST_GREEN }, rectRadius: 0.1 });
  slide.addText('By the Numbers', { x: 7.2, y: 1.4, w: 2.1, h: 0.3, fontSize: 14, color: WARM_GOLD, bold: true });
  const stats = [{ num: '15+', label: 'Scottish SMEs advised' }, { num: '£12M', label: 'Client revenue growth' }, { num: '100%', label: 'Client retention rate' }];
  stats.forEach((s, i) => {
    slide.addText(s.num, { x: 7.2, y: 1.85 + (i * 0.75), w: 2.1, h: 0.35, fontSize: 22, color: WARM_GOLD, bold: true });
    slide.addText(s.label, { x: 7.2, y: 2.2 + (i * 0.75), w: 2.1, h: 0.3, fontSize: 11, color: WHITE });
  });

  // ========== NEW SLIDE 8: CASE STUDY ==========
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1, fill: { color: FOREST_GREEN } });
  slide.addText('Case Study: TechVenture Solutions', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 28, color: WHITE, bold: true });

  // Situation section
  slide.addText('THE SITUATION', { x: 0.5, y: 1.2, w: 4.3, h: 0.3, fontSize: 12, color: WARM_GOLD, bold: true });
  slide.addText('Edinburgh-based fintech, 28 employees, pre-Series A. Founder-led with no documented processes. New hires took 14 weeks to become productive. Investors flagged operational risk.',
    { x: 0.5, y: 1.5, w: 4.3, h: 1, fontSize: 11, color: SLATE_GREY, valign: 'top' });

  // Approach section
  slide.addText('OUR APPROACH', { x: 0.5, y: 2.5, w: 4.3, h: 0.3, fontSize: 12, color: WARM_GOLD, bold: true });
  slide.addText('5-month engagement: process mapping, playbook creation, leadership coaching, and Series A preparation. Worked alongside the team two days per week.',
    { x: 0.5, y: 2.8, w: 4.3, h: 0.9, fontSize: 11, color: SLATE_GREY, valign: 'top' });

  // Results box
  slide.addShape(pptx.shapes.RECTANGLE, { x: 5.2, y: 1.2, w: 4.3, h: 3.2, fill: { color: FOREST_GREEN }, rectRadius: 0.1 });
  slide.addText('THE RESULTS', { x: 5.4, y: 1.35, w: 3.9, h: 0.3, fontSize: 12, color: WARM_GOLD, bold: true });

  const results = [
    { metric: '14 → 4 weeks', label: 'Onboarding time reduced by 71%' },
    { metric: '8 playbooks', label: 'Critical processes documented' },
    { metric: '£3.2M', label: 'Series A closed 3 months later' },
    { metric: '0 → 3', label: 'Promoted internal leaders' }
  ];

  results.forEach((r, i) => {
    slide.addText(r.metric, { x: 5.4, y: 1.75 + (i * 0.62), w: 3.9, h: 0.32, fontSize: 18, color: WHITE, bold: true });
    slide.addText(r.label, { x: 5.4, y: 2.05 + (i * 0.62), w: 3.9, h: 0.25, fontSize: 10, color: WHITE });
  });

  // Quote
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0.5, y: 3.8, w: 4.3, h: 0.85, fill: { color: 'F5F5F5' }, rectRadius: 0.05 });
  slide.addText('"GrowthPath didn\'t just give us documents — they built our management muscle. We closed our Series A three months ahead of schedule."',
    { x: 0.6, y: 3.9, w: 4.1, h: 0.5, fontSize: 10, color: SLATE_GREY, italic: true });
  slide.addText('— Fiona MacLeod, CEO, TechVenture Solutions',
    { x: 0.6, y: 4.4, w: 4.1, h: 0.2, fontSize: 9, color: FOREST_GREEN, bold: true });

  // Slide 9: Investment
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: 1, fill: { color: FOREST_GREEN } });
  slide.addText('Investment', { x: 0.5, y: 0.25, w: 9, h: 0.5, fontSize: 28, color: WHITE, bold: true });
  slide.addText("What's Included", { x: 0.5, y: 1.3, w: 5.5, h: 0.4, fontSize: 18, color: FOREST_GREEN, bold: true });
  const included = ['Full discovery and current state assessment', '10 documented workflow playbooks', 'Leadership team coaching sessions', 'Onboarding programme redesign', 'Series B narrative and board materials', '6 months of hands-on support'];
  included.forEach((item, i) => {
    slide.addText('• ' + item, { x: 0.5, y: 1.75 + (i * 0.35), w: 5.5, h: 0.35, fontSize: 12, color: SLATE_GREY });
  });
  slide.addText('Not Included', { x: 0.5, y: 4, w: 5.5, h: 0.3, fontSize: 14, color: SLATE_GREY, bold: true });
  const notIncluded = ['Technology implementation (tools, software)', 'Recruitment or HR services', 'Legal or financial advisory'];
  notIncluded.forEach((item, i) => {
    slide.addText('• ' + item, { x: 0.5, y: 4.3 + (i * 0.3), w: 5.5, h: 0.3, fontSize: 11, color: SLATE_GREY });
  });
  slide.addShape(pptx.shapes.RECTANGLE, { x: 6.5, y: 1.3, w: 3, h: 3.2, fill: { color: FOREST_GREEN }, rectRadius: 0.1 });
  slide.addText('Total Investment', { x: 6.7, y: 1.5, w: 2.6, h: 0.3, fontSize: 14, color: WARM_GOLD, align: 'center' });
  slide.addText('£45,000', { x: 6.7, y: 1.9, w: 2.6, h: 0.6, fontSize: 36, color: WHITE, bold: true, align: 'center' });
  slide.addText('6-month engagement', { x: 6.7, y: 2.5, w: 2.6, h: 0.3, fontSize: 14, color: WHITE, align: 'center' });
  slide.addText('Monthly invoicing: £7,500/month.\n50% payable on signing,\nbalance monthly.', { x: 6.7, y: 3, w: 2.6, h: 1, fontSize: 11, color: WHITE, align: 'center', valign: 'top' });

  // Slide 10: Next Steps
  slide = pptx.addSlide();
  slide.addShape(pptx.shapes.RECTANGLE, { x: 0, y: 0, w: '100%', h: '100%', fill: { color: FOREST_GREEN } });
  slide.addText('Next Steps', { x: 0.5, y: 1, w: 9, h: 0.7, fontSize: 36, color: WHITE, bold: true, align: 'center' });
  const steps = [
    { num: '1', text: 'Review this proposal with your team' },
    { num: '2', text: 'Schedule a follow-up call to discuss questions' },
    { num: '3', text: 'Sign engagement letter and begin Discovery' }
  ];
  steps.forEach((step, i) => {
    const x = 1.2 + (i * 2.7);
    slide.addShape(pptx.shapes.RECTANGLE, { x: x, y: 2, w: 2.3, h: 1.5, fill: { color: '3D6A4D' }, rectRadius: 0.1 });
    slide.addText(step.num, { x: x, y: 2.1, w: 2.3, h: 0.5, fontSize: 28, color: WARM_GOLD, bold: true, align: 'center' });
    slide.addText(step.text, { x: x + 0.1, y: 2.6, w: 2.1, h: 0.8, fontSize: 12, color: WHITE, align: 'center', valign: 'top' });
  });
  slide.addText('Ready to talk?', { x: 0.5, y: 3.8, w: 9, h: 0.4, fontSize: 14, color: WHITE, align: 'center' });
  slide.addText('hodl@growthpath.scot', { x: 0.5, y: 4.2, w: 9, h: 0.4, fontSize: 18, color: WARM_GOLD, bold: true, align: 'center' });

  // Save
  const outputPath = '/Users/johngordon/Library/Mobile Documents/com~apple~CloudDocs/work/courses/m3.lb2/dataflow-proposal.pptx';
  await pptx.writeFile({ fileName: outputPath });
  console.log('Presentation with case study saved to:', outputPath);
}

addCaseStudySlide().catch(console.error);
