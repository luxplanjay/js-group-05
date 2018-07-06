'use strict';

// const makeSale = function(product) {
//   console.log('this: ', this);
//   console.log(`${this.name} sold ${product}`);
//   this.sales += 1;
// };

// makeSale('beef');

// const mango = {
//   name: 'Mango',
//   sales: 0,
// };

// mango.sell = makeSale;

// mango.sell('apples');

// console.log(mango);

// const poly = {
//   name: 'Poly',
//   sales: 0,
// };

// poly.sell = makeSale;

// poly.sell('grapes');
// console.log(poly);

// =====================================
// const user = {
//   name: 'Mango',
//   showName() {
//     console.log('this: ', this);
//   },
// };

// const log = function(callback) {
//   callback();
// };

// log(user.showName);

//==================================================

// const makeSale = function(product, price) {
//   console.log('this: ', this);
//   console.log(`${this.name} sold ${product}, price ${price}`);
//   this.sales += 1;
// };

// const mango = {
//   name: 'Mango',
//   sales: 0,
// };

// const poly = {
//   name: 'Poly',
//   sales: 0,
// };

// makeSale.call(mango, 'beef', 50);
// console.log(mango);

// makeSale.apply(mango, ['grapes', 20]);
// console.log(mango);

// makeSale.call(poly, 'apples');
// console.log(poly);

// const boundMakeSale = makeSale.bind(mango);
// boundMakeSale('apples', 10);

// const user = {
//   name: 'Mango',
//   showName() {
//     console.log('this: ', this);
//   },
// };

// const log = function(callback) {
//   callback();
// };

// log(user.showName.bind(user));

// ===================================

/**
 * 1. Оператор new создает пустой объект (место в памяти)
 * 2. Оператор new взывает функцию-конструктор в контексте этого объекта
 */

function Manager({ name, age, gender }) {
  // this = {}

  this.name = name;
  this.age = age;
  this.gender = gender;
  this.sales = 0;

  this.sell = function(product, price) {
    // console.log('this: ', this);
    console.log(`${this.name} sold ${product}, price ${price}`);
    this.sales += 1;
  };

  // return this
}

const mango = new Manager({
  name: 'Mango',
  age: 3,
  gender: 'male',
});
console.log(mango);

mango.sell('grapes', 20);
console.log(mango);

const poly = new Manager({
  name: 'Poly',
  age: 2,
  gender: 'female',
});
console.log(poly);

poly.sell('apples', 30);
console.log(poly);
