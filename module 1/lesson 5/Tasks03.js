'use strict'

// сплит реверс джоин

const reversStr = (str) => {
  const splitSting = str.split('');
  const reverseString = splitSting.reverse();
  const joinString = reverseString.join('');
  return joinString;
};
console.log(reversStr('Привет мир'));