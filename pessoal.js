const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-theme');
  });

/*
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

themeToggle.addEventListener('change', () => {
  body.classList.toggle('dark-theme');
});
*/