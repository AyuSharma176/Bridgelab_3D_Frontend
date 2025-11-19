
// Task 6: Real-Time Table Filter Using input Event
const search = document.getElementById('student-search');
const table = document.getElementById('students-table');
const rows = Array.from(table.tBodies[0].rows);
const noResults = document.getElementById('no-results');

search.addEventListener('input', ()=>{
  const q = search.value.trim().toLowerCase();
  let any=false;
  rows.forEach(r=>{
    const text = r.textContent.toLowerCase();
    const match = text.includes(q);
    r.style.display = match ? '' : 'none';
    if(match) any=true;
  });
  noResults.hidden = any || q.length===0;
});
