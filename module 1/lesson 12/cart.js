'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

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
    this.increaceCount();
    confirm(`добавить ещё продукт?`) ? this.add() : 'Ok';
    this.setDiscount = prompt(`Введите промокод:`);
  },

  get setDiscount() {
    return this.discount;
  },

  set setDiscount(promocode) {
    if (promocode === String('METHED')) {
      this.discount = 15;
    } else if (promocode === String('NEWYEAR')) {
      this.discount = 21;
    }
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
    if (this.discount === 15) {
      totalPrice -= (totalPrice * 0.15);
    } else if (this.discount === 21) {
      totalPrice -= (totalPrice * 0.21);
    }
    return totalPrice;
  },

  clear() {
    const clear = confirm(`Отчистить корзину?`);
    if (clear) {
      this.items = [];
      this.count = 0;
      this.discount = 0;
      this.print();
    }
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
