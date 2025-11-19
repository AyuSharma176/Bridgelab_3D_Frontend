
// Task 9: Form Submit Blocker with preventDefault() and Live Errors
const bForm = document.getElementById('block-form');
const fname = document.getElementById('f-name');
const femail = document.getElementById('f-email');
const fpass = document.getElementById('f-pass');
const errName = document.getElementById('err-name');
const errEmail = document.getElementById('err-email');
const errPass = document.getElementById('err-pass');
const msg = document.getElementById('form-msg');

function validate(){
  let ok=true;
  errName.textContent = '';
  errEmail.textContent = '';
  errPass.textContent = '';
  if (!fname.value.trim()){ errName.textContent = 'Name required'; ok=false; }
  if (!femail.value.includes('@')){ errEmail.textContent = 'Valid email required'; ok=false; }
  if (fpass.value.length < 6){ errPass.textContent = 'Min 6 chars'; ok=false; }
  return ok;
}

bForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  if (validate()){
    msg.hidden = false;
    msg.textContent = 'Form Submitted Successfully';
    bForm.reset();
    setTimeout(()=> msg.hidden = true, 3000);
  }
});

// live validation removal
[fname,femail,fpass].forEach(inp=> inp.addEventListener('input', ()=>{ validate(); }));
