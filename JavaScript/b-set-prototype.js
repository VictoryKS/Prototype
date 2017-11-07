'use strict';

function Rect (x, y, width, height) {
  this.x = x;
  this.y = y;
  this.width = width;
  this.height = height;
}

Rect.prototype.toString = function() {
  return `[${this.x}, ${this.y}, ${this.width}, ${this.height}]`;
}

const p1 = { x: 10, y: 20, width: 50, height: 50 };
Object.setPrototypeOf(p1, Rect.prototype);

console.log(p1.toString());
