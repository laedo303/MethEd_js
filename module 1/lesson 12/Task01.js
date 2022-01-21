/* eslint-disable require-jsdoc */
'use strict';

const game = () => {
  const rnd = Math.round(Math.random() * 100);

  console.log('rnd: ', rnd);

  const question = confirm(`Сыграем в угадайку?`) ? letGame() : alert('Bye');

  function letGame() {
    const num = +prompt(`Введите число до 100`);

    if (num === null) {
      return;
    }
    if (num > rnd) {
      alert(`меньше`);
    } else if (num < rnd) {
      alert(`больше`);
    }
    if (num === rnd) {
      alert(`верно`);
      return;
    }
    letGame();
  }
};
const letGame = game();
letGame();