export const createElems = () => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  document.body.prepend(wrapper);

  const container = document.createElement('div');
  container.classList.add('container');
  wrapper.append(container);

  const userInput = document.createElement('input');
  userInput.classList.add('userInput');

  const userText = document.createElement('p');
  userText.classList.add('userText');
  container.append(userInput, userText);
};
