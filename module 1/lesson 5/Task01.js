'use strict'

const converter = (eur) => {
  return 'Получено ' + eur * 1.2 * 73 + ' руб.';
};
console.log(converter(+prompt('Введите сумму покупки в евро:')));