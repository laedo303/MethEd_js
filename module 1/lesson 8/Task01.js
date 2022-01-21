'use strict'
let elems = [];

const rndArr = item => {
  let rand = rnd => {
    rnd = Math.round(Math.random() * 100);
    return rnd;
  };

  for (let i = 0; i < item; i++) {
    elems.push(rand())
  }

};

rndArr(9)

console.log(elems);
