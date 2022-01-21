'use strict';
(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];
  const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const computerResult = getRandomIntInclusive(0, 2);


  const game = () => {
    const result = {
      computer: 0,
      player: 0,
    };

    return function startGame(computerResult) {
      const playerResult = FIGURES_RUS.indexOf(prompt(`камень, ножницы, или бумага?`));

      if (playerResult === 0 && computerResult === 1 ||
        playerResult === 1 && computerResult === 2 ||
        playerResult === 2 && computerResult === 0) {
        result.player += 1;
        alert(`
          компьютер: ${FIGURES_RUS[computerResult]}
          игрок: ${FIGURES_RUS[playerResult]}
          ты выйграл
        `);
        return confirm(`Сыграем ещё?`) ? startGame(getRandomIntInclusive(0, 2)) :
        alert(`
          компьютер: ${[result.computer]}
          игрок: ${[result.player]};
        `);

      } else if (playerResult === computerResult) {
        alert(`
          компьютер: ${FIGURES_RUS[computerResult]}
          игрок: ${FIGURES_RUS[playerResult]}
          Ничья`);
        return confirm(`Сыграем ещё?`) ? startGame(getRandomIntInclusive(0, 2)) :
        alert(`
          компьютер: ${[result.computer]}
          игрок: ${[result.player]};
        `);

      } else {
          result.computer = result.computer + 1;
          alert(`
            компьютер: ${FIGURES_RUS[computerResult]}
            игрок: ${FIGURES_RUS[playerResult]}
            ты проиграл`);
          return confirm(`Сыграем ещё?`) ? startGame(getRandomIntInclusive(0, 2)) :
          alert(`
            компьютер: ${[result.computer]}
            игрок: ${[result.player]};
          `);
      };
    };
  };

  const start = game();
  start(getRandomIntInclusive(0, 2));
})();
