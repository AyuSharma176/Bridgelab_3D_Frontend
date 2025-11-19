
// Task 1: Dynamic Product List Manager (Add/Edit/Delete using Event Delegation)
// Elements
const productInput = document.getElementById('product-input');
const addBtn = document.getElementById('add-product');
const productList = document.getElementById('product-list');

// Add product
addBtn.addEventListener('click', () => {
  const name = productInput.value.trim();
  if (!name) return alert('Enter product name');
  const li = document.createElement('li');
  li.innerHTML = `<span class="label">${escapeHtml(name)}</span>
    <div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div>`;
  productList.appendChild(li);
  productInput.value = '';
});

// Event delegation for edit/delete
productList.addEventListener('click', (e) => {
  const li = e.target.closest('li');
  if (!li) return;
  if (e.target.classList.contains('delete')) {
    li.remove();
  } else if (e.target.classList.contains('edit')) {
    enterEditMode(li);
  }
});

// Click outside to auto-save edit
document.addEventListener('click', (e) => {
  const editing = productList.querySelector('.editing');
  if (!editing) return;
  if (!editing.contains(e.target)) {
    saveEdit(editing);
  }
}, true);

// Helpers
function enterEditMode(li) {
  if (li.classList.contains('editing')) return;
  const label = li.querySelector('.label');
  const text = label.textContent;
  li.classList.add('editing');
  li.innerHTML = `<input class="edit-input" value="${escapeHtml(text)}" /><div class="actions"><button class="save">Save</button><button class="delete">Delete</button></div>`;
  const input = li.querySelector('.edit-input');
  input.focus();
  input.setSelectionRange(0, input.value.length);
  // save button inside
  li.querySelector('.save').addEventListener('click', () => saveEdit(li));
  // allow Enter to save
  input.addEventListener('keydown', (ev) => {
    if (ev.key === 'Enter') saveEdit(li);
  });
}

function saveEdit(li) {
  const input = li.querySelector('.edit-input');
  if (!input) return;
  const val = input.value.trim() || 'Untitled';
  li.classList.remove('editing');
  li.innerHTML = `<span class="label">${escapeHtml(val)}</span>
    <div class="actions"><button class="edit">Edit</button><button class="delete">Delete</button></div>`;
}

function escapeHtml(s){ return s.replace(/[&<>"']/g, (c)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' })[c]); }
