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
      const playerInput = prompt(`камень, ножницы, или бумага?`);
      const playerResult = FIGURES_RUS.indexOf(playerInput);

      if(playerInput === null) return alert(`
        компьютер: ${[result.computer]}
        игрок: ${[result.player]};
      `);

      if(playerInput === undefined || !playerInput) startGame(computerResult);
      console.log('playerInput: ', playerInput);


      if (playerResult === 0 && computerResult === 1 ||
        playerResult === 1 && computerResult === 2 ||
        playerResult === 2 && computerResult === 0) {
        result.player += 1;
        return confirm(`
          ты выйграл!
          компьютер: ${FIGURES_RUS[computerResult]}
          игрок: ${FIGURES_RUS[playerResult]}
          Сыграем ещё?
        `) ? startGame(getRandomIntInclusive(0, 2)) :
        alert(`
          компьютер: ${[result.computer]}
          игрок: ${[result.player]};
        `);

      } else if (playerResult === computerResult) {
        return confirm(`
          Ничья
          компьютер: ${FIGURES_RUS[computerResult]}
          игрок: ${FIGURES_RUS[playerResult]}
          Сыграем ещё?`) ? startGame(getRandomIntInclusive(0, 2)) :
        alert(`
          компьютер: ${[result.computer]}
          игрок: ${[result.player]};
        `);

      } else if (playerInput === undefined && !playerInput) return startGame(computerResult);

        else {
        result.computer = result.computer + 1;
        return confirm(`
          проиграл(
          компьютер: ${FIGURES_RUS[computerResult]}
          игрок: ${FIGURES_RUS[playerResult]}
          Сыграем ещё?`) ? startGame(getRandomIntInclusive(0, 2)) :
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
