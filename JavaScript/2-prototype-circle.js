'use strict';

const Circle = function(r) {
  this.r = r;
};

Circle.prototype.area = function() {
  return 3.14 * this.r * this.r;
};
Circle.prototype.length = function() {
  return 2 * 3.14 * this.r;
};

const c1 = new Circle(5);

console.log('area = ' + c1.area() + ' length = ' + c1.length());
