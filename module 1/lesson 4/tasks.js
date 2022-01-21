'use strict'
//* lesson 4
//! Task 4.1
{
  const productRequest = prompt(`Введите наименование товара: `);
  const categoryRequest = prompt(`Введите категорию товара: `);
  let quantityRequest = +(prompt(`Введите колличество: `));
  let priceRequest = +(prompt(`Введите цену: `));


  if (Number.isNaN(quantityRequest, priceRequest)) {
    console.log('Введены не корректные данные!');
    quantityRequest = Number(prompt(`Введите колличество: `));
    priceRequest = +(prompt(`Введите цену: `));

  };
    console.log(typeof productRequest, 'Наименование товара: ', productRequest);
    console.log(typeof categoryRequest, 'Категория товара: ', categoryRequest);
    console.log(`цена товара: ${priceRequest}`)
    console.log(`Колличество товара: ${quantityRequest}`)
    console.log(`На складе ${quantityRequest} шт. товара "${productRequest}" на сумму ${quantityRequest * priceRequest} руб.`)
}


// !task 4.2
{
  const rain = Math.round(Math.random());
  if (rain >= 1) {
    console.log('Будет дождь, возмите зонт!');
  } else {
    console.log('Дождя не будет');
  };
}


// !task 4.3
{
  let mathPoints = +(prompt(`Введите колличество баллов по математике: `));
  let langPoints = +(prompt(`Введите колличество баллов по русскому языку: `));
  let compPoints = +(prompt(`Введите колличество баллов по информатике: `));
  const Points = mathPoints + langPoints + compPoints;


  if (Points >= 265) {
    console.log(`Поздравляем! Вы поступили на бюджет! Ваши баллы: ${Points}`);
  } else if (Points < 265) {
    console.log(`Ваших баллов не достаточно для поступления на бюджет. Ваши баллы: ${Points} из 265`);
  } else if (Number.isNaN(mathPoints, langPoints, compPoints)) {
    console.log('Введены неверные значения');
    mathPoints = +(prompt(`Введите колличество баллов по математике: `));
    langPoints = +(prompt(`Введите колличество баллов по русскому языку: `));
    compPoints = +(prompt(`Введите колличество баллов по информатике: `));
  }
}

// !task 4.4
{
  alert('Внимание! Банкомат не выдает банкноты номиналом меньше 100₽');
  const request = +(prompt(`Введите сумму кратную 100: `));
  const nominal = (request % 100);

  if (nominal === 0) {
    alert(`Происходит выдача: ${request}`);
  } else {
    alert(`Введено некорректное значение: ${request}`);
  };
}
