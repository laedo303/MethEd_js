'use strict';
(() => {
  function rnd() {
    return Math.round(Math.random() * 10)
  };
  const botResult = rnd();

  const marble = () => {
    const result = {
      player: 5,
      bot: 5,
    };

    return function sum(botResult) {
      if(result.player <= 0) {
        return alert(`
        Компьютер выйграл!
        игрок: 0
        бот: ${result.bot}
        `);
      };
      if(result.bot <= 0) {
        return alert(`
        Игрок выйграл!
        игрок: ${result.player}
        бот: 0
        `);
      };

      const playerNumber = +prompt(`введите число шариков от 1 до ${result.player}`);
      console.log('playerNumber: ', playerNumber);

      if(playerNumber === 0) return confirm(`Завершить игру?`) ?
      alert(`
      игрок: ${result.player}
      бот: ${result.bot}
      `) : sum(botResult);

      if(!playerNumber) return alert(`Введите число!`), sum(botResult);
      if(Number.isNaN(playerNumber)) return alert(`Введите число!`), sum(botResult);

      if(playerNumber > result.player) return alert(`Введите число! от 1 до ${result.player}`), sum(botResult);

      (botResult % 2 === 0) ? alert(`Чётнное?`) : alert(`Не чётнное?`);

      if(playerNumber % 2 === 0 && botResult % 2 === 0 || playerNumber % 2 !== 0 && botResult % 2 !== 0) {
        result.bot += +playerNumber;
        result.player -= +playerNumber;
        alert(`
        Вы проиграли раунд!
          игрок: ${result.player}
          бот: ${result.bot}
        `); sum(rnd());
      } else {
        result.player += +playerNumber;
        result.bot -= +playerNumber;
        alert(`
          Вы выйграли раунд!
          игрок: ${result.player}
          бот: ${result.bot}
        `); sum(rnd());

      }

    };

  };
  const marbleSum = marble();
  marbleSum(rnd());
})();
