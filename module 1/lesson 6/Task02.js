'use strict'

const isPrime = (number) => {
  if (number === NaN)
    return false;
  if (number === undefined)
    return false;

  if (number <= 1)
    return false;

  for(let i = 2; i < number; i++) {
    if(number % i !== 0) {
      return true;
    } else if(number === i * i) {
      return false;
    }
  }




  return true;
}
console.log(isPrime(1987));
