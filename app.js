'use strict';
const KEY = 'info5995-formal-progress-v1';
const app = document.querySelector('#app');
const esc = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
let records = {}, activeId = null, screen = 'home', category = 'mock', reviewIndex = 0, storageOK = true;
const blank = exam => ({answers:Array(exam.questions.length).fill(null),index:0,complete:false});
function validRecord(value, exam) {
  return value && Array.isArray(value.answers) && value.answers.length===exam.questions.length && value.answers.every(a=>a===null || Number.isInteger(a) && a>=0 && a<4) && Number.isInteger(value.index) && value.index>=0 && value.index<exam.questions.length;
}
try {
  const saved = JSON.parse(localStorage.getItem(KEY));
  for(const exam of EXAMS) {
    const value=saved?.records?.[exam.id];
    if(validRecord(value,exam)) records[exam.id]={answers:value.answers,index:value.index,complete:value.complete===true && value.answers.every(a=>a!==null)};
  }
} catch {storageOK=false;}
const getExam = () => EXAMS.find(e=>e.id===activeId);
const getRecord = exam => records[exam.id] ||= blank(exam);
const answered = record => record.answers.filter(a=>a!==null).length;
function save() {
  try {localStorage.setItem(KEY,JSON.stringify({records}));} catch {storageOK=false;}
  document.querySelector('#storage-warning').hidden=storageOK;
}
function transition(next) {screen=next;render();window.scrollTo(0,0);app.querySelector('h1,h2')?.focus({preventScroll:true});}
function card(exam) {
  const r=getRecord(exam),count=answered(r),n=exam.questions.length;
  const number=exam.kind==='mock'?exam.id.slice(-1).padStart(2,'0'):exam.id==='teacher-prep'?'A':'B';
  const progress=r.complete?'Completed':count?`${count} / ${n} answered`:'Not started';
  return `<section class="test-card"><div class="card-top"><span class="number">${number}</span><span class="tag">${progress}</span></div><h2>${esc(exam.title)}</h2><p class="sub">${esc(exam.description)}</p><div class="meta"><span><strong>${n}</strong> questions</span><span>Chinese + English explanations</span></div><button class="primary" data-exam="${exam.id}">${r.complete?'View results':count?'Continue':'Start paper'} <span aria-hidden="true">↗</span><span class="sr-only"> ${esc(exam.title)}</span></button></section>`;
}
function home() {
  app.innerHTML=`<section class="hero"><p class="eyebrow">A LITTLE PRACTICE, EVERY DAY</p><h1 tabindex="-1">One question.<br><em>One step closer.</em></h1><p class="intro">Choose a paper and go at your own pace.<br>One question per page, with explanations after you finish.</p></section><div class="tabs" role="group" aria-label="Question bank"><button data-category="mock" aria-pressed="${category==='mock'}">Mock Papers <small>4 × 10 questions</small></button><button data-category="teacher" aria-pressed="${category==='teacher'}">Instructor <small>41 unique questions</small></button></div><p class="section-note">${category==='mock'?'Custom questions weighted by revision priority, with balanced option lengths and answer positions.':'Original instructor questions, options and answers. Repeated questions across the two banks have been merged.'}</p><div class="exam-list">${EXAMS.filter(e=>e.kind===category).map(card).join('')}</div><details class="content-notes"><summary>${category==='mock'?'How the papers are weighted':'How repeated questions were handled'}</summary>${category==='mock'?`<p>The weekly overview rates Weeks 1–11 High and Week 12 Medium; no week is rated Low. These are revision priorities, not exam probabilities published by the instructor.</p><p>Across four papers: 38 High-priority and 2 Medium-priority questions. Weeks 4–8 have four questions each; Weeks 1–3 and 9–11 have three each; Week 12 has two.</p><p>Based on the INFO5995 Weekly Revision Overview (Weeks 1–12) and course practice concepts. Custom questions are practice, not predictions of the final exam.</p>`:`<p>Both original banks contain 30 questions. Questions 1–18 are identical. W1–8 Q27 and Full Course Q29 differ only in wording; the Full Course version is retained.</p><p>The 30 Full Course questions plus W1–8 questions 19–26 and 28–30 give 41 retained questions. Related topics remain where scenarios or options differ.</p><p>Questions and answers were checked against the Exam Preparation and Exam Revision Weeks 1–8 banks and their Answer Guides. Explanations are revision notes; original options are preserved.</p>`}</details><p class="how">Progress is saved separately for each paper in this browser. It does not sync across devices or browsers.</p>`;
}
function question(review=false) {
  const exam=getExam(),r=getRecord(exam),qs=exam.questions,n=qs.length,i=review?reviewIndex:r.index,q=qs[i],selected=r.answers[i];
  app.innerHTML=`<div class="toolbar"><button class="text-button" data-action="${review?'result':'home'}">← ${review?'Back to results':'Home'}</button><span class="counter"><strong>${i+1}</strong> / ${n}</span></div><div class="progress" role="progressbar" aria-label="${review?'Review':'Question'} progress" aria-valuemin="0" aria-valuemax="${n}" aria-valuenow="${i+1}"><span style="width:${(i+1)/n*100}%"></span></div><p class="question-meta">${review?'Answer review':esc(exam.title)}${q.originalNumber?' · Original Q'+q.originalNumber:''} · Single answer</p><h2 class="question" lang="en" tabindex="-1">${esc(q.prompt)}</h2><div role="group" aria-label="Answer options">${q.options.map((o,j)=>review?`<div class="option review ${j===q.answer?'correct':j===selected?'incorrect':''}"><span class="letter">${'ABCD'[j]}</span><span class="option-text" lang="en">${esc(o)}${j===q.answer?'<span class="status" lang="en">✓ Correct answer'+(selected===j?' · Your answer':'')+'</span>':j===selected?'<span class="status" lang="en">× Your answer</span>':''}</span></div>`:`<button class="option" data-choice="${j}" aria-pressed="${selected===j}"><span class="letter">${'ABCD'[j]}</span><span class="option-text" lang="en">${esc(o)}</span></button>`).join('')}</div>${review?`<div class="explanation"><strong>${selected===q.answer?'✓ Correct':'Review this concept'}</strong>${q.week?`<p class="review-topic">Week ${q.week} · ${esc(q.topic)} · ${q.priority} priority</p>`:''}<p lang="zh-Hant">${esc(q.explanation)}</p>${q.explanationEn?`<details class="english-explanation" lang="en"><summary>English explanation</summary><p>${esc(q.explanationEn)}</p></details>`:''}<div class="source">${esc(q.source)}</div></div>`:''}<div class="nav"><button class="secondary" data-action="previous" ${i===0?'disabled':''}>Previous</button><button class="primary" data-action="next" ${!review&&selected===null?'disabled':''}>${i===n-1?review?'Back to results':'Finish & see results':'Next →'}</button></div><p class="save-note">${review?'Practice questions are not predictions of the final exam.':storageOK?'You can change your choice · Progress saves automatically':'Please finish during this browser session'}</p>`;
}
function result() {
  const exam=getExam(),r=getRecord(exam),qs=exam.questions,n=qs.length,score=qs.reduce((s,q,i)=>s+Number(r.answers[i]===q.answer),0);
  app.innerHTML=`<div class="toolbar"><button class="text-button" data-action="home">← Home</button><span class="tag">${esc(exam.title)}</span></div><section class="hero"><p class="eyebrow">PRACTICE COMPLETE</p><h1 tabindex="-1">Practice complete.</h1><div class="score">${score}<small> / ${n}</small></div><p class="intro">${score===n?'You answered every question correctly!':'Review the explanations to strengthen less familiar concepts.'}<br>Tap a question number below to review its explanation.</p></section><div class="result-grid" aria-label="Question results">${qs.map((q,i)=>`<button class="result-chip ${r.answers[i]===q.answer?'':'wrong'}" data-review="${i}" aria-label="Question ${i+1}, ${r.answers[i]===q.answer?'Correct':'Incorrect'}, view explanation">${i+1}<span>${r.answers[i]===q.answer?'✓ Correct':'× Incorrect'}</span></button>`).join('')}</div><div class="stack"><button class="primary" data-action="review">Review explanations →</button><button class="secondary" data-action="restart">Restart this paper</button><button class="text-button" data-action="home">Choose another paper</button></div>`;
}
function render() {if(screen==='home') home();else if(screen==='quiz')question();else if(screen==='review')question(true);else result();document.querySelector('#storage-warning').hidden=storageOK;}
app.addEventListener('click',e=>{
  const tab=e.target.closest('[data-category]');
  if(tab){category=tab.dataset.category;transition('home');return;}
  const entry=e.target.closest('[data-exam]');
  if(entry){const exam=EXAMS.find(e=>e.id===entry.dataset.exam);if(!exam)return;activeId=exam.id;category=exam.kind;transition(getRecord(exam).complete?'result':'quiz');return;}
  const exam=getExam();if(!exam)return;const r=getRecord(exam),n=exam.questions.length;
  const choice=e.target.closest('[data-choice]');
  if(choice&&screen==='quiz'){r.answers[r.index]=Number(choice.dataset.choice);save();question();app.querySelector(`[data-choice="${choice.dataset.choice}"]`).focus({preventScroll:true});return;}
  const review=e.target.closest('[data-review]');
  if(review&&r.complete){reviewIndex=Number(review.dataset.review);transition('review');return;}
  const b=e.target.closest('[data-action]');if(!b||b.disabled)return;
  switch(b.dataset.action){
    case 'home':save();transition('home');break;
    case 'result':if(r.complete)transition('result');break;
    case 'review':if(r.complete){reviewIndex=0;transition('review');}break;
    case 'restart':if(confirm('Restarting clears the progress and score for this paper only. Other papers are unaffected. Restart now?')){records[exam.id]=blank(exam);save();transition('quiz');}break;
    case 'previous':if(screen==='review')reviewIndex=Math.max(0,reviewIndex-1);else r.index=Math.max(0,r.index-1);save();transition(screen);break;
    case 'next':
      if(screen==='review'){if(reviewIndex===n-1)transition('result');else{reviewIndex++;transition('review');}}
      else if(screen==='quiz'&&r.answers[r.index]!==null){
        if(r.index===n-1){const missing=r.answers.indexOf(null);if(missing>=0){r.index=missing;save();transition('quiz');}else{r.complete=true;save();transition('result');}}
        else{r.index++;save();transition('quiz');}
      }
      break;
  }
});
render();
