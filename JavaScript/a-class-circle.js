'use strict';

class Circle {
  constructor(r) {
    this.r = r;
  }
  area() {
    return 3.14 * this.r * this.r;
  }
  length() {
    return 2 * 3.14 * this.r;
  }
}

const c1 = new Circle(5);

console.log('area = ' + c1.area() + ' length = ' + c1.length());
