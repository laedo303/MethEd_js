'use strict'

// lesson 1

{
  const product = 'скобки для степлера';
  const quantity = 50;
  const category = 'канцелярские товары'
  const price = 100;

  console.log(category,);
  console.log(`Общая сумма товара: ${quantity * price} руб.`);
}



// lesson 2

{
  const product = 'Клавиатура';
  const quantity = '11'
  const category = 'Электронные товары';
  const price = 1200;

  console.log(category);
  console.log(`Общая сумма товара: ${quantity * price} руб.`)
}




// lesson 3

{
  const productRequest = prompt(`Введите наименование товара: `);
  const quantityRequest = Number(prompt(`Введите колличество: `));
  const categoryRequest = prompt(`Введите категорию товара: `);
  const priceRequest = Number(prompt(`Введите цену: `));

  console.log(typeof productRequest, 'Товар: ', productRequest);
  console.log(typeof quantityRequest, 'Колличество: ', quantityRequest);
  console.log(typeof categoryRequest, 'Категория: ', categoryRequest);
  console.log(typeof priceRequest, 'Цена: ', priceRequest);

  console.log(`На складе ${quantityRequest} шт. товара "${productRequest}" на сумму ${quantityRequest * priceRequest} руб.`)
}



// lesson 4

{
  const productRequest = prompt(`Введите наименование товара: `);
  const categoryRequest = prompt(`Введите категорию товара: `);
  const quantityRequest = Number(prompt(`Введите колличество: `));
  const priceRequest = Number(prompt(`Введите цену: `));

  if (Number.isFinite(quantityRequest)) {
  }if (Number.isNaN(priceRequest)) {
    console.log('Введены не корректные данные!')
  } else {
    console.log(typeof productRequest, 'Наименование товара: ', productRequest);
    console.log(typeof categoryRequest, 'Категория товара: ', categoryRequest);
    console.log(`цена товара: ${priceRequest}`)
    console.log(`Колличество товара: ${quantityRequest}`)
    console.log(`На складе ${quantityRequest} шт. товара "${productRequest}" на сумму ${quantityRequest * priceRequest} руб.`)
  };
}
