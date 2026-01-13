const quickButtons = document.querySelectorAll('[data-prompt]');
const input = document.querySelector('#chatInput');
const feedbackButtons = document.querySelectorAll('[data-feedback]');

quickButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (input) {
      input.value = btn.dataset.prompt;
      input.focus();
    }
  });
});

feedbackButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    feedbackButtons.forEach((other) => other.classList.remove('active'));
    btn.classList.add('active');
  });
});
