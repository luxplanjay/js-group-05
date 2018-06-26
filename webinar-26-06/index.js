'use strict';

// const dog = {
//   name: 'Mango',
//   age: 2,
//   color: 'brown',
//   friendsCount: 5,
// };

// const key = 'friendsCount';

// console.log(dog.friendsCount);
// console.log(dog[key]);
// console.log(dog.breed);

// ==================== Короткие свойства
// const name = 'Mango';
// const age = 5;

// const dog = {
//   name,
//   age,
// };

// console.log(dog)

//============= delete

// const dog = {
//   name: 'Mango',
//   age: 2,
//   color: 'brown',
//   friendsCount: 5,
// };

// console.log(dog);

// delete dog.color;
// delete dog.friendsCount;

// console.log(dog);

//=================== добавление

// const dog = {
//   name: 'Mango',
//   age: 2,
// };

// console.log(dog);

// dog.color = 'brown';
// console.log(dog);

// dog.age = 5;
// console.log(dog);

//==================================== отсуствующие свойства

// const dog = {
//   name: 'Mango',
//   age: 2,
//   mood: undefined,
// };

// console.log(dog);

// console.log('dog.mood: ', dog.mood);
// console.log(`dog.hasOwnProperty('mood'): `, dog.hasOwnProperty('mood'));

// console.log('dog.breed: ', dog.breed);
// console.log(`dog.hasOwnProperty('breed'): `, dog.hasOwnProperty('breed'));

// const dog = {
//   name: 'Mango',
//   age: 2,
//   color: 'brown',
//   friendsCount: 5,
//   makeSound() {
//     console.log(`${dog.name} says woof!`);
//   },
//   addFriends(num) {
//     dog.friendsCount += num;
//   },
//   changeColor(color) {
//     dog.color = color;
//   },
// };

// dog.makeSound();

// dog.addFriends(5);

// dog.changeColor('grey');

// console.log(dog);

// ========================

// let a = 5;

// let b = a;

// console.log('a: ', a);
// console.log('b: ', b);

// a = 10;

// console.log('a: ', a);
// console.log('b: ', b);

// const objA = { name: 'mango' };
// const objB = objA;

// console.log('objA: ', objA);
// console.log('objB: ', objB);

// objA.name = 'poly';

// console.log('objA: ', objA);
// console.log('objB: ', objB);

// objB.name = 'ajax';
// console.log('objA: ', objA);
// console.log('objB: ', objB);

// =================

// const a = { val: 5 };

// const b = { val: 5 };

// a.val = 666;

// console.log(a);
// console.log(b);

// const x = [1, 2, 3];
// const y = x;

// console.log(x === y);

// ========================

// const numbers = [1, 2, 3, 4, 5];

// const addNumbers = (arr, x) => {
//   const newArr = arr.slice();

//   newArr.push(x);

//   return newArr;
// };

// const addedArr = addNumbers(numbers, 6);

// console.log('numbers: ', numbers);
// console.log('addedArr: ', addedArr);

// const guest = {
//   name: 'Mango',
//   age: 2,
// };

// const changeAge = (obj, newAge) => {
//   obj.age = newAge;
// };

// changeAge(guest, 5);

// console.log(guest);

// ================================

// const dog = {
//   name: 'Mango',
//   age: 2,
//   color: 'brown',
//   friendsCount: 5,
// };

// for (const key in dog) {
//   console.log('key: ', key);
//   console.log('dog[key]: ', dog[key]);
// }

// ========================

// const salaries = {
//   mango: 50,
//   poly: 120,
//   ajax: 80,
// };

// let total = 0;

// for (const key in salaries) {
//   total += salaries[key];
// }

// console.log('total: ', total);

//============================

// const dog = {
//   name: 'mango',
//   friends: [
//     { name: 'poly', age: 2 },
//     { name: 'ajax', age: 3 }
//   ],
// };

// console.log( dog.friends[0].name )

// ================================

// const workers = [
//   { name: 'mango', salary: 50 },
//   { name: 'poly', salary: 150 },
//   { name: 'ajax', salary: 200 },
// ];

// // console.log(workers[0].name);
// // console.log(workers[1].salary);

// let total = 0;

// for (const worker of workers) {
//   total += worker.salary;
// }

// console.log('total: ', total);

//======================= Object.keys(obj)

// const salaries = {
//   mango: 50,
//   poly: 120,
//   ajax: 80,
// };

// const keys = Object.keys(salaries);
// console.log(keys);

// let total = 0;

// for (const key of keys) {
//   total += salaries[key];
// }

// console.log(total);

//======================= Object.values(obj)

// const salaries = {
//   mango: 50,
//   poly: 120,
//   ajax: 80,
// };

// const values = Object.values(salaries);
// console.log(values);

// let total = 0;

// for (const value of values) {
//   total += value;
// }

// console.log(total);

//======================= Object.entries(obj)

// const salaries = {
//   mango: 50,
//   poly: 120,
//   ajax: 80,
// };

// const entries = Object.entries(salaries);
// console.log(entries);

// let total = 0;

// for (const entry of entries) {
//   const key = entry[0];
//   const value = entry[1];

//   console.log('key: ', key);
//   console.log('value: ', value);

//   total += value;
// }

// console.log(total);

// ===============================

// const defaultSettings = {
//   theme: 'light',
//   timeFormat: '24h',
// };

// const userSettings = {
//   name: 'Mango',
//   theme: 'dark',
// };

// const merged = Object.assign({}, defaultSettings, userSettings);

// console.log('defaultSettings: ', defaultSettings);
// console.log('userSettings: ', userSettings);
// console.log(merged);

// ================================

// const defaultSettings = {
//   theme: 'light',
//   timeFormat: '24h',
// };

// const userSettings = {
//   name: 'Mango',
//   theme: 'dark',
// };

// const merged = { ...defaultSettings, ...userSettings };

// console.log(merged)

//===========================

// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.slice();
// newArr.push(6);
// console.log(newArr);

// const newArr = arr.concat([6, 7]);
// console.log(newArr);

// const newArr = [123, 'qwe', ...arr, 6, 7, ...arr, 8];
// console.log(newArr);

// ===========================

// const dog = {
//   id: 1,
//   name: 'Mango',
//   age: 2,
//   color: 'brown',
// };

// const name = dog.name;
// const age = dog.age;
// const color = dog.color;

// const {
//   name = 'some name',
//   id: dogId = 0,
//   ...rest
// } = dog;

// console.log(name);
// console.log(dogId);
// console.log(rest);
// console.log(age);
// console.log(color);
// console.log(breed);

const showGuestInfo = ({ name = 'guest', age, room }) => {
  console.log(name);
  console.log(age);
  console.log(room);
};

showGuestInfo({
  name: 'mango',
  age: 2,
  room: 34,
});
