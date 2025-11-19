
// Task 2: Live Character Counter with Warning Behavior
const area = document.getElementById('char-area');
const remaining = document.getElementById('remaining');
const resetBtn = document.getElementById('reset-counter');
const MAX = 100;

area.addEventListener('input', (e) => {
  const left = MAX - area.value.length;
  remaining.textContent = left;
  const counter = remaining.parentElement;
  counter.classList.remove('yellow','red');
  if (left <= 0) {
    counter.classList.add('red');
    // prevent further typing by trimming (can't reliably cancel input after the fact)
    if (area.value.length > MAX) area.value = area.value.slice(0, MAX);
  } else if (left <= 20) {
    counter.classList.add('yellow');
  }
});

// block further typing at 0 using keydown preventDefault
area.addEventListener('keydown', (e) => {
  const left = MAX - area.value.length;
  if (left <= 0 && !['Backspace','Delete','ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)) {
    e.preventDefault();
  }
});

resetBtn.addEventListener('click', () => {
  area.value = '';
  remaining.textContent = MAX;
  remaining.parentElement.classList.remove('yellow','red');
  area.focus();
});
