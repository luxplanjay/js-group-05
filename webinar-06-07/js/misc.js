// Цикл while не совсем понятен

// const numbers = [];

// do {
//   const input = prompt('Введи число');
//   const asNumber = Number(input);
//   const validNumber = !Number.isNaN(asNumber);

//   if (input === null) {
//     break;
//   }

//   if (!validNumber) {
//     alert('да ты не число ввел!');
//   }

//   if (validNumber) {
//     numbers.push(asNumber);
//   }
// } while (true);

// console.log(numbers);

//Паттерн Guard Clause

// const printArray = arr => {
//   if (!Array.isArray(arr)) {
//     console.log('Не массив');
//     return;
//   }

//   arr.forEach(el => console.log(el));
// };

// printArray([1, 2, 3]);

// printArray(45);

//callback-functions one more time please!
