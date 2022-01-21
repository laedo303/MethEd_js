'use strict'

let elems = [];
const rndArr = (item, min, max) => {
  let rand = rnd => {
    rnd = Math.round(min + Math.random() * (max - min));
    return rnd;
  };
  for (let i = 0; i < item; i++) {
    elems.push(rand())
  };
};
rndArr(5, 1, 10)
console.log(elems);
