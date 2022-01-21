'use strict'

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];
const getAverageValue = (arr) => {
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum += arr[i];
}
const arrLength = arr.length;
const result = sum / arrLength;
console.log('result: ', result);
};
getAverageValue(allСashbox);
