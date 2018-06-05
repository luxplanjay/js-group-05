'use strict';

// const userAge = prompt('Введите ваш возраст!');
// // '123qwe'
// const asNumber = Number(userAge); // NaN
// const isNaN = Number.isNaN(asNumber); // true

// console.log('isNaN: ', isNaN);

// console.log(asNumber);
// console.log(typeof asNumber);

// const boxPadding = '20px';

// const padValue = Number.parseFloat('123.5px');

// console.log(padValue);

// console.log(typeof padValue);

// let balance = 124.02;
// balance = (balance * 100 + 3.02 * 100) / 100;
// console.log(balance);

// console.log( Math.random() * 100);

// const guestName = prompt('Введите имя!');

// const message = 'Welcome ' + guestName + '!';

// console.log(message);

// const result = (20 + '10');

// console.log(result);

// const name = 'My name is Mango';

// const hasStr = name.includes('Mango');

// console.log( hasStr );

const name = 'Mango';
const age = 2;
const mood = 'happy';

// My name is Mango, I'm 2 years old and happy!

const message =
  'My name is ' + name + ", I'm " + age + ' years old and ' + mood + '!';

const tplMessage = `My name is ${name}, I'm ${age} years old and ${mood}!`;

console.log(tplMessage);
