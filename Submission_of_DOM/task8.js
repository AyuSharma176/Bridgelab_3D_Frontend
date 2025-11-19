
// Task 8: Custom Dropdown Using Only JavaScript (No <select>)
// Use capturing phase for outside click close
const dropBtn = document.getElementById('drop-btn');
const options = document.getElementById('drop-options');
const dropdown = document.getElementById('my-dropdown');

dropBtn.addEventListener('click', (e)=>{
  options.hidden = !options.hidden;
});

options.addEventListener('click', (e)=>{
  const li = e.target.closest('li');
  if(!li) return;
  dropBtn.textContent = li.textContent;
  options.hidden = true;
});

// capturing phase listener on document to close when clicking outside
document.addEventListener('click', (e)=>{
  if (!dropdown.contains(e.target)) options.hidden = true;
}, true);
