'use strict';

/**
 * Определение функции
 */

// const log = function(value) {
//   console.log(value);
// };

// log('Functions are amazing');

// const add = function(a, b) {
//   console.log('a: ', a);
//   console.log('b: ', b);

//   const result = a + b;

//   return result;
// };

// const res = add(2, 3);

// console.log('res: ', res);

/**
 * Объявление функции
 */
// console.log(add(2, 3));

// function add(a, b) {
//   const result = a + b;

//   return result;
// }

// console.log(add(5, 5));

/**
 * findSmallestNumber
 */
// const numbers = [20, 1, , 2, 3, 30, 10, 40, -4, 50];

// const findSmallestNumber = function(arr) {
//   let smallestNumer = arr[0];

//   for (let i = 1; i < arr.length; i += 1) {
//     const elem = arr[i];

//     // console.group(i);
//     // console.log('elem: ', elem);
//     // console.log('smallestNumer: ', smallestNumer);
//     // console.groupEnd(i);

//     if (elem < smallestNumer) {
//       smallestNumer = elem;
//     }
//   }

//   return smallestNumer;
// };

// const num = findSmallestNumber(numbers);
// console.log('num: ', num);

// console.log(findSmallestNumber([1, 2, 3, 4, 5]));
// console.log(findSmallestNumber([11, 12, 31, 14, 15]));
// console.log(findSmallestNumber([14, 2, 3, 42, 5]));

/**
 * Параметры по умолчанию
 */
// const greet = function(name = 'guest') {
//   console.log(`Hello ${name}!`);
// };

// greet('mango');
// greet();

/**
 * checkNumerType
 */

/*
  Напишите функцию checkNumberType(num)

  Функция получает число num как аргумент и возвращает
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// const checkNumberType = function(num) {
//   if (num % 2 === 0) {
//     return 'Even';
//   }

//   return 'Odd';

//   // return num % 2 === 0 ? 'Even' : 'Odd';
// };

// // Вызовы функции для проверки
// console.log(checkNumberType(2)); // 'Even'
// console.log(checkNumberType(46)); // 'Even'
// console.log(checkNumberType(3)); // 'Odd'
// console.log(checkNumberType(17)); // 'Odd'

/**
 * Псевдомассив arguments
 */
// const add = function() {
//   let total = 0;

//   for (const arg of arguments) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2));
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5));

// const add = function() {
//   const args = Array.from(arguments);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2));
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));
// console.log(add(1, 2, 3, 4, 5));

// const add = function(...args) {
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total += arg;
//   }

//   return total;
// };

// console.log(add(1, 2));
// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4));

// const fn = function(arr, ...args) {
//   const newArray = arr.slice();

//   for (const arg of args) {
//     const hasElem = newArray.includes(arg);

//     if (!hasElem) {
//       newArray.push(arg);
//     }
//   }

//   // for (let i = 0; i < args.length; i += 1) {
//   //   const arg = args[i];
//   //   const hasElem = newArray.includes(arg);

//   //   if (!hasElem) {
//   //     newArray.push(arg);
//   //   }
//   // }

//   console.log(newArray);
// };

// fn([1, 2, 3], 2, 3, 4, 5, 6);

// ============== 18+
// const fn = function(...args) {
//   let arr;

//   for (let i = 0; i < args.length; i += 1) {
//     if (Array.isArray(args[i])) {
//       arr = args[i];
//       args.splice(i, 1);
//     }
//   }

//   console.log('arr: ', arr);
//   console.log('args: ', args);
// };

// console.log(fn(1, 2, ['a', 'b'], 3, 4));

/**
 * Область видимости
 */

// /**
//  * GlobalLE = {
//  *  outerLE: null
//  * }
//  */

// const fn = function(value) {
//   /*
//     LE = {
//       value: 5,
//       outerLE: GlobalLE
//     }
//   */
//   console.log('outerVar: ', outerVar);

//   console.log(value);

//     /*
//     LE = {
//       value: 5,
//       outerLE: GlobalLE
//     }
//   */

//   const string = 'hello';
//   /*
//     LE = {
//       value: 5,
//       string: 'hello
//     }
//   */
//  console.log(string)
//   console.log(string);
// };

// const outerVar = 'outer var!';

// // GlobalLE = {
// //  outerVar: 'outer var!'
// //  fn: f
// // }

// fn(5);

// ========================================
// Вложенные области видимости
//==========================================

// Иллюстрация области видимости - http://take.ms/TyYQR

// // GlobalLE = { outerLE: null }
// const globalValue = 'global value';
// /**
//  * GlobalLE = {
//  *  globalValue: 'global value',
//  *  outerLE: null
//  * }
//  */

// const fnA = function() {
//   /**
//    * При объялении сохраняется scope
//    * fnA.scope = GlobalLE;
//    *
//    * При вызове создается
//    * fnA_LE = {
//    *  outerLE: fnA.scope
//    * }
//    */

//   console.log('globalValue in fnA: ', globalValue);

//   const varInFnA = 'var in fnA';

//   /**
//    * fnA_LE = {
//    *  varInFnA: 'var in fnA',
//    *  outerLE: fnA.scope
//    * }
//    */

//   const fnB = function() {
//     /**
//      * При объялении сохраняется scope
//      * fnB.scope = fnA_LE;
//      *
//      * При вызове создается
//      * fnB_LE = {
//      *  outerLE: fnB.scope
//      * }
//      */

//     const varInFnB = 'var in fnB';
//     /**
//      * При вызове создается
//      * fnB_LE = {
//      *  varInFnB: 'var in fnB',
//      *  outerLE: fnB.scope
//      * }
//      */
//     console.log('varInFnB: ', varInFnB);
//     console.log('varInFnA: ', varInFnA);
//     console.log('globalValue: ', globalValue);
//   };

//   /**
//    * fnA_LE = {
//    *  varInFnA: 'var in fnA',
//    *  fnB: f,
//    *  outerLE: fnA.scope
//    * }
//    */

//   fnB();
// };

// /**
//  * GlobalLE = {
//  *  globalValue: 'global value',
//  *  fnA: f
//  *  outerLE: null
//  * }
//  */

// const x = 5;
// fnA();

// =====================================

const a = function() {
  console.log('in a');
};

const b = function() {
  console.log('in b');
};

const c = function() {
  a();
  b();
};

c();
