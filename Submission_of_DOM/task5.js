
// Task 5: Image Gallery with Modal Preview

// Force modal hidden on page load (fix)
document.getElementById("modal").hidden = true;

const gallery = document.querySelector('.gallery');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalClose = document.getElementById('modal-close');

gallery.addEventListener('click', (e) => {
  const img = e.target.closest('img');
  if (!img) return;
  modalImg.src = img.getAttribute('data-large') || img.src;
  modal.hidden = false;
});

// clicking outside closes
modal.addEventListener('click', () => modal.hidden = true);

// prevent closing when clicking inside
modal.querySelector('.modal-content').addEventListener('click', (e)=> e.stopPropagation());

modalClose.addEventListener('click', ()=> modal.hidden = true);
