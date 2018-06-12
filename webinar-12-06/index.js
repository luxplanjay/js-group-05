'use strict';

// const guests = ['Mango', 'Poly', 'Ajax', 'Kongo'];

// console.log(guests);

// console.log('guests[0]: ', guests[0]);

// guests[0] = 'Chelsey';

// console.log(guests);
// console.log('guests[0]: ', guests[0]);

// console.log('guests.length: ', guests.length);

// const lastElement = guests[guests.length - 1];
// console.log('lastElement: ', lastElement);

//=================================================
// const arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// console.log('arr: ', arr);
// console.log('arr[2][2]: ', arr[2][2]);

//=================================================
// const userInput = prompt('Введите продукты через запятую');

// if (userInput !== null) {
//   const products = userInput.split(',');
//   console.log(products);
// }

// ===========================================
// const users = ['Mango', 'Poly', 'Ajax'];
// const string = users.join('-*-');

// console.log(string);

//==============================
// const guests = ['Mango', 'Poly', 'Ajax', 'Poly'];

// const idx = guests.indexOf('Poly');
// console.log('idx: ', idx);

// const hasElement = guests.includes('Poly');
// console.log('hasElement: ', hasElement);

// const nameA = 'Superman';
// const nameB = 'Batman';
// const nameC = 'Green Lantern';

// console.log(nameA.indexOf('man'));

//=============================

// const guests = ['Mango', 'Poly', 'Ajax', 'Poly', 'Chelsey'];

// console.log('guests: ', guests);

// const popResult = guests.pop();
// console.log('guests: ', guests);
// console.log('popResult: ', popResult);

// const pushResult = guests.push('Singu', 'Chelsey');
// console.log('guests: ', guests);
// console.log('pushResult: ', pushResult);

// const shiftResult = guests.shift();
// console.log('guests: ', guests);
// console.log('shiftResult: ', shiftResult);

// const unshiftResult = guests.unshift('el 1', 'el 2');
// console.log('guests: ', guests);
// console.log('unshiftResult: ', unshiftResult);

//==========================================================
// const guests = ['Mango', 'Poly', 'Ajax', 'Poly', 'Chelsey'];

// const guestsSlice = guests.slice(0, 3);

// console.log('guestsSlice: ', guestsSlice);
// console.log('guests: ', guests);

//==========================================================
// const guests = ['Mango', 'Poly', 'Ajax', 'Singu', 'Chelsey'];

// const userInput = prompt(`Кого вырезаем? ${guests.join(' или ')}`);
// console.log(userInput);

// const idx = guests.indexOf(userInput);
// const elements = guests.splice(idx, 1);

// console.log('elements: ', elements);
// console.log('guests: ', guests);

// ==========================================
// const guests = ['Mango', 'Singu', 'Chelsey'];
// console.log('guests: ', guests);

// guests.splice(1, 1, 'Poly');
// console.log('guests: ', guests);

// guests.splice(2, 0, 'Singu');
// console.log('guests: ', guests);

// guests.splice(2, 0, [1, 2, 3]);
// console.log('guests: ', guests);

//==============================================

// const guestsA = ['Mango', 'Poly'];
// const guestsB = ['Singu', 'Chelsey'];

// const guests = guestsA.concat(guestsB);

// console.log('guests: ', guests);
// console.log('guestsA: ', guestsA);
// console.log('guestsB: ', guestsB);

//=======================================
// const guests = ['Mango', 'Singu', 'Chelsey'];
// // console.log('typeof guests: ', typeof guests);

// const isArray = Array.isArray(guests);
// console.log('isArray: ', isArray);

//=============

// const a = [1, '2', 3];
// const b = [4, 5, 6];

// const result = a[1] + b[0];

// console.log(result);

// ===================================
// const numbers = [];

// do {
//   let userInput = prompt('Введи число или жмакни отмену');

//   if (userInput === null) {
//     break;
//   }

//   numbers.push(Number(userInput));
// } while (true);

// console.log(numbers);
