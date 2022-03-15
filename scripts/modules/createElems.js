export const createElems = () => {
  const userInput = document.createElement('input');
  userInput.setAttribute('type', 'text');
  userInput.classList.add('userInput');

  const userText = document.createElement('p');
  userText.classList.add('userText');
  userText.textContent = '';

  document.body.prepend(userInput, userText);

  document.body.style = `
    background-color: rgb(209, 209, 209);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 90vh;
    `;
};
