"use strict";
console.log('Hello!');

const cart = {
  items: [],
  // totalPrice: 0,
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  add() {
    const title = prompt(`Введите название продукта:`);
    const price = +prompt(`Введите цену продукта:`);
    const count = +prompt(`Введите количество продукта:`);
    this.items.push({
      title,
      price,
      count,
    });
    // this.getTotalPrice();
    this.increaceCount();
    confirm(`добавить ещё продукт?`) ? this.add() : "Ok";
  },

  increaceCount() {
    let sum = 0;
    this.items.forEach((elems) => {
      sum += elems.count;
    });
    this.count = sum;

  },

  calculateItemPrice() {
    let totalPrice = 0;
    this.items.forEach((elem) => {
      totalPrice += elem.price * elem.count;
    });
    // this.totalPrice = totalPrice;
    return totalPrice;

  },

  clear() {
    const clear = confirm(`Отчистить корзину?`);
    if (clear) {
      this.items = [];
      // this.totalPrice = 0;
      this.count = 0;
      this.print();
    }
    // else {
    //   alert(`спасибо за покупки`);
    // }
  },
  print() {
    const jsonStr = JSON.stringify(this.items);
    console.log(jsonStr);
    console.log(`
    Общее количество товара:${this.count}
    Общая сумма заказа ${this.totalPrice}
    `);
  },
};

cart.add();
cart.print();
cart.clear();
