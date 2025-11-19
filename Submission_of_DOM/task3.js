
// Task 3: Multi-Step Form with Next/Back & Validation
const form = document.getElementById('multi-form');
const steps = Array.from(form.querySelectorAll('.step'));
let idx = 0;
const nextBtn = document.getElementById('next');
const backBtn = document.getElementById('back');
const finishBtn = document.getElementById('finish');
const summary = document.getElementById('summary');

function showStep(i){
  steps.forEach((s,si)=> s.hidden = si!==i);
  backBtn.hidden = i===0;
  nextBtn.hidden = i===steps.length-1;
  finishBtn.hidden = i!==steps.length-1;
}
showStep(idx);

nextBtn.addEventListener('click', ()=>{
  const input = steps[idx].querySelector('input');
  if (!input.checkValidity()) { input.reportValidity(); return; }
  idx = Math.min(steps.length-1, idx+1);
  showStep(idx);
});

backBtn.addEventListener('click', ()=>{ idx = Math.max(0, idx-1); showStep(idx); });

finishBtn.addEventListener('click', ()=>{
  const input = steps[idx].querySelector('input');
  if (!input.checkValidity()) { input.reportValidity(); return; }
  // show summary
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('password').value;
  summary.hidden = false;
  summary.innerHTML = `<strong>Summary</strong><div>Name: ${escapeHtml(name)}</div><div>Email: ${escapeHtml(email)}</div><div>Password: ${'*'.repeat(8)}</div>`;
});

function escapeHtml(s){ return s.replace(/[&<>"']/g, (c)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]); }
