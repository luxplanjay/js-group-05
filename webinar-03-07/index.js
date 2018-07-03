'use strict';

// const numbers = [1, 2, 3];

// const dirty = arr => {
//   for (let i = 0; i < arr.length; i += 1) {
//     arr[i] = arr[i] * 2;
//   }
// };

// dirty(numbers);
// console.log(numbers);

// const pure = arr => {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     newArr.push(arr[i] * 2);
//   }

//   return newArr;
// };

// const updatedNumbers = pure(numbers);
// console.log(numbers);
// console.log('updatedNumbers: ', updatedNumbers);

//================= map

// function map(arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     const elem = arr[i];

//     const result = callback(elem, i, arr);

//     newArr.push(result);
//   }

//   return newArr;
// }

// const numbers = [1, 2, 3, 4, 5];

// const double = (val, index, array) => val * 2;

// const resultA = map(numbers, double);
// console.log('numbers: ', numbers);
// console.log('resultA: ', resultA);

// const addFive = val => val + 5;

// const resultB = map(numbers, addFive);
// console.log('numbers: ', numbers);
// console.log('resultB: ', resultB);

// console.log(
//   numbers.map((val, idx, arr) => {
//     console.log('val: ', val);
//     console.log('idx: ', idx);
//     console.log('arr: ', arr);
//     return val * 10;
//   }),
// );

// const guests = [
//   { name: 'mango', age: 2 },
//   { name: 'poly', age: 3 },
//   { name: 'ajax', age: 4 },
// ];

// const result = guests.map(guest => {
//   if (guest.name === 'mango') {
//     return {
//       ...guest,
//       age: guest.age + 1,
//     };
//   }

//   return guest;
// });

// console.log('guests: ', guests);
// console.log(result);

// ===============================

// function filter(arr, callback) {
//   const newArr = [];

//   for (let i = 0; i < arr.length; i += 1) {
//     const passes = callback(arr[i]);

//     if (passes) {
//       newArr.push(arr[i]);
//     }
//   }

//   return newArr;
// }

// const numbers = [1, 2, 3, 4, 5];

// const result = filter(numbers, val => val > 4);

// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// const filtered = numbers.filter(number => number < 0);
// console.log(filtered);

// const guests = [
//   { name: 'mango', age: 2, active: true },
//   { name: 'poly', age: 3, active: false },
//   { name: 'ajax', age: 4, active: true },
// ];

// const filtered = guests.filter(guest => guest.age > 3);
// console.log(filtered);

// const getActiveGuests = arr => arr.filter(el => el.active);

// const activeGuests = guests.filter(guest => guest.active);
// const activeGuests = getActiveGuests(guests);
// console.log('activeGuests: ', activeGuests);

// const incativeGuests = guests.filter(guest => !guest.active);
// console.log('incativeGuests: ', incativeGuests);

// ========================== find

// const guests = [
//   { id: 1, name: 'mango', age: 2, active: true },
//   { id: 2, name: 'poly', age: 3, active: false },
//   { id: 3, name: 'ajax', age: 4, active: true },
// ];

// const mango = guests.find(guest => guest.name === 'mango1111');
// console.log(mango);

// const getGuestById = (arr, id) => arr.find(el => el.id === id);

// console.log(getGuestById(guests, 1));
// console.log(getGuestById(guests, 3));

//=========================== forEach

// const numbers = [1, 2, 3, 5];

// for (let i = 0; i < numbers.length; i += 1) {
//   const number = numbers[i];

//   console.log(number);
// }

// numbers.forEach(number => {
//   console.log(number);
// });

//========================= callback

// const greet = name => {
//   console.log('hello ' + name);
// };

// const doStuff = (message, callback) => {
//   const input = prompt(message);

//   callback(input);
// };

// doStuff('Давай имя!', greet);

//============== task-05-02

/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.

  Функция должна возвращать массив всех значений этого
  ключа из arr.

  PS: обязательно используйте функциональные методы массивов,
  никаких for!
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// const getPropValues = (arr, prop) => arr.map(el => el[prop]);

// // Вызовы функции для проверки
// console.log(getPropValues(guests, 'name')); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

// console.log(getPropValues(guests, 'age')); // [20, 18, 30, 45]

// console.log(getPropValues(guests, 'isActive')); // [true, false, true, false]

// ============================= task-05-03

/*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', inactiveDays: 15, isActive: true },
//   { name: 'Poly', inactiveDays: 8, isActive: false },
//   { name: 'Ajax', inactiveDays: 32, isActive: false },
//   { name: 'Chelsey', inactiveDays: 85, isActive: true },
// ];

// const setGuestState = (guests, period) => {
//   return guests.map(guest => {
//     if (guest.inactiveDays > period) {
//       return {
//         ...guest,
//         isActive: false,
//       };
//     }

//     return {
//       ...guest,
//       isActive: true,
//     };
//   });
// };

// const setGuestState = (guests, period) => {
//   return guests.map(guest => {
//     return {
//       ...guest,
//       isActive: guest.inactiveDays < period,
//     };
//   });
// };

// const setGuestState = (guests, period) =>
//   guests.map(guest => ({
//     ...guest,
//     isActive: guest.inactiveDays < period,
//   }));

// Вызовы функции для проверки
// console.log(setGuestState(guests, 10)); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

// console.log(setGuestState(guests, 20)); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

// console.log(setGuestState(guests, 50)); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true

// ==========================

/*
  Напишите функцию getGuestsOlderThan(guests, age), где
  guests - массив объектов гостей, age - предел возраста
  для сортировки.

  Функция возвращает массив объектов значение свойства
  age которых больше чем параметр age.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { name: 'Mango', age: 20, isActive: true },
//   { name: 'Poly', age: 18, isActive: false },
//   { name: 'Ajax', age: 30, isActive: true },
//   { name: 'Chelsey', age: 45, isActive: false },
// ];

// // explicit return - явный возврат
// const getGuestsOlderThan = (guests, age) => {
//   return guests.filter(guest => guest.age > age);
// };

// implicit return - неявный возврат
// const getGuestsOlderThan = (guests, age) =>
//   guests.filter(guest => guest.age > age);

// // Вызовы функции для проверки
// console.log(getGuestsOlderThan(guests, 25)); // массив из 2-х объектов Ajax и Chelsey

// console.log(getGuestsOlderThan(guests, 35)); // [{name: 'Chelsey', age: 45, isActive: false}]

// console.log(getGuestsOlderThan(guests, 55)); // []

// ================================================

/*
  Напишите функию getGuestByEmail(guests, email), принимающую
  guests - массив объектов гостей, email - мыло (строка).

  Функция должна возвращать объект гостя с совпадающим email.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

// const guests = [
//   { id: 1, name: 'Mango', age: 20, email: 'mango@mail.com' },
//   { id: 2, name: 'Poly', age: 18, email: 'poly@mail.com' },
//   { id: 3, name: 'Ajax', age: 30, email: 'ajax@mail.com' },
//   { id: 4, name: 'Chelsey', age: 45, email: 'chelsey@mail.com' },
// ];

// const getGuestByEmail = (guests, email) => {
//   return guests.find(guest => guest.email === email);
// };

// const getGuestByEmail = (guests, email) =>
//   guests.find(guest => guest.email === email);

// // Вызовы функции для проверки
// console.log(getGuestByEmail(guests, 'mango@mail.com')); // {id: 3, name: 'Ajax', age: 30}

// console.log(getGuestByEmail(guests, 'poly@mail.com')); // {id: 1, name: 'Mango', age: 20}

// console.log(getGuestByEmail(guests, 'bangalore@mail.com')); // undefined
