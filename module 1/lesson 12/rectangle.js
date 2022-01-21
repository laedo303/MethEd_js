'use strict';

const rectangle = {
  width: 5,
  height: 5,

  get square() {
    return `"${(this.width * this.height)} cm"`;
  },
  get perimeter() {
    return `"${(this.width + this.height) * 2} cm"`;
  },
  set setWidth(value) {
    this.width = value;
  },
  set setHeight(value) {
    this.height = value;
  },
};
rectangle.setWidth = 10;
rectangle.setHeight = 10;
console.log(rectangle.perimeter);
console.log(rectangle.square);

