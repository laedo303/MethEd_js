export const delayText = () => {
  const userInput = document.querySelector('.userInput');
  const userText = document.querySelector('.userText');
  let interval;

  userInput.addEventListener('keydown', () => {
    clearInterval(interval);
    interval = setTimeout(() => {
      userText.textContent = userInput.value;
    }, 300);
  });
};
