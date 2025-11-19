
// Task 4: Theme Switcher Using Attribute Manipulation
const themeButtons = document.querySelectorAll('#task4 button');
themeButtons.forEach(btn=> btn.addEventListener('click', ()=>{
  const theme = btn.getAttribute('data-theme');
  document.body.setAttribute('data-theme', theme);
  // Save theme in custom attribute
  document.body.setAttribute('data-theme', theme);
}));
