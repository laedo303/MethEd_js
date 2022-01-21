'use strict'

const elems = [];

const rndArr = (item, min, max, str) => {

  const rand = rnd => {
    rnd = Math.round(min + Math.random() * (max - min));
    return rnd;
  };
  for (let i = 0; i < item; i++) {
    elems.push(rand())
  };

const arr = elems.filter((item) => str ==='even' ? item % 2 === 0 : str === 'odd' ? (item % 2 !== 0) : null);
}

rndArr(5, 1, 10, 'even')
console.log(elems);
