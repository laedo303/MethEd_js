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

  const checkStr = num => {
    if (str === 'even') {
      return (num % 2 === 0);
    }
    if (str === 'odd') {
      return (num % 2 != 0);
    }
  }

  const arr = elems.filter(checkStr);
  console.log('arr: ', arr);
  return arr;

}

rndArr(5, 1, 10, 'even');
console.log(elems);
