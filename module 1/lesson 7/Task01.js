'use strict'

const failedStud = ['Петров', 'Галустян'];
const allStud = ['Иванов', 'Петров', 'Сидоров', 'Галустян', 'Петросян'];

const filterArr = (arr1, arr2) => arr1.filter((item => !arr2.includes(item)));
console.log('filterArr: ', filterArr(allStud, failedStud));

