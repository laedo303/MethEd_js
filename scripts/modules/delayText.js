export const delayText = () => {
  const userInput = document.querySelector('.userInput');
  const userText = document.querySelector('.userText');

  userInput.addEventListener('keydown', () => {
    clearInterval();
    setTimeout(() => {
      userText.textContent = userInput.value;
    }, 300);
  });
};
