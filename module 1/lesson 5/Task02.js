'use strict'

const lowerAll = (str) => {
  const lowStr = str.toLowerCase();
  return lowStr[0].toUpperCase() + lowStr.substring(1);
};

console.log(lowerAll('привет Мир'));