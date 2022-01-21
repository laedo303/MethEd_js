'use strict'

const leap = [];

const years = (start, end) => {
  let yearsArr = [];
  for (let i = start; i <= end; i++) {
    yearsArr.push(i);
  };
  leap.push(yearsArr.filter((item) => (item % 4 === 0) && (item % 100 !== 0) || (item % 400 === 0)))
};

years(1900, 2022);
console.log('leap', leap);