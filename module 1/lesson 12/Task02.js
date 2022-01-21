'use strict';

const rndArr = [];

const getRandomElems = () => {
  const rnd = num => num = Math.round(Math.random() * 10);

  rndArr.push(rnd());

  const sumElems = rndArr.reduce((sum, curent) => sum + curent, 0);

  if (sumElems < 50) {
    getRandomElems();
  }
  return rndArr;
};

getRandomElems();
console.log('rndArr: ', rndArr);
