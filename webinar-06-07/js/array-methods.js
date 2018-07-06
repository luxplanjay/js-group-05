(() => {
  /**
   * Array.every() и Array.some()
   */

  // const numbers = [1, 2, 3, 4, 5];

  // console.log('every: ', numbers.every(number => number > 3));
  // console.log('some: ', numbers.some(number => number > 3));

  // const guests = [
  //   { name: 'mango', active: true },
  //   { name: 'poly', active: false },
  //   { name: 'ajax', active: true },
  // ];

  // console.log('every: ', guests.every(guest => guest.active));
  // console.log('some: ', guests.some(guest => guest.active));

  // const validationResults = {
  //   name: true,
  //   email: false,
  //   password: true,
  // };

  // const values = Object.values(validationResults);
  // const valid = values.every(value => value);
  // console.log('valid: ', valid);

  /**
   * Array.sort()
   */

  // const numbers = [5, 3, 2, 4, 1];
  // console.log(numbers.sort((prev, next) => prev - next));

  // const users = [
  //   { name: 'mango', age: 10 },
  //   { name: 'poly', age: 4 },
  //   { name: 'ajax', age: 2 },
  // ];

  // console.log(users.sort((prev, next) => prev.age - next.age));

  /**
   * Array.reduce()
   */

  /*  Считаем сумму чисел */
  // const numbers = [1, 2, 3, 4, 5];

  // const sum = numbers.reduce((accumulator, number, index) => {
  // console.group(`index -> ${index}`);
  // console.log('accumulator: ', accumulator);
  // console.log('number: ', number);
  // console.groupEnd(`index -> ${index}`);

  //   return accumulator + number;
  // }, 1);

  // console.log('sum: ', sum);

  /* Считаем зарплату хранящуюся в массиве объектов */
  // const workers = [
  //   { name: 'mango', salary: 50 },
  //   { name: 'poly', salary: 100 },
  //   { name: 'ajax', salary: 150 },
  // ];

  // const sum = workers.reduce((acc, worker, idx) => {
  //   console.group(`index -> ${idx}`);
  //   console.log('acc: ', acc);
  //   console.log('worker: ', worker);
  //   console.groupEnd(`index -> ${idx}`);

  //   return acc + worker.salary;
  // }, 0);

  // console.log('sum: ', sum);

  // const listItems = ['HTML', 'CSS', 'JS', 'React'];

  // const markup = listItems.reduce((string, item) => {
  //   return string + `<div>${item}</div>`;
  // }, '');

  // console.log(markup);
  // document.body.insertAdjacentHTML('afterbegin', markup);

  /* Считаем общую сумму статов отряда */
  // const squad = [
  //   {
  //     name: 'Mango',
  //     stats: { str: 5, dex: 3, int: 8 },
  //   },
  //   {
  //     name: 'Poly',
  //     stats: { str: 2, dex: 7, int: 8 },
  //   },
  //   {
  //     name: 'Ajax',
  //     stats: { str: 9, dex: 3, int: 5 },
  //   },
  // ];

  // const squadStats = squad.reduce(
  //   (total, hero) => {
  //     total.str += hero.stats.str;
  //     total.dex += hero.stats.dex;
  //     total.int += hero.stats.int;

  //     return total;
  //   },
  //   { str: 0, dex: 0, int: 0 },
  // );

  // console.log(squadStats);

  /**
   * Цепочки вызовов методов массива
   */
  // const numbers = [9, 4, 2, 3, 5, 7, 6, 8, 1];

  // найти все элементы больше 5
  // умножить все элементы на 2
  // отсортировать в порядке возрастания

  // const filtered = numbers.filter(number => number > 5);
  // console.log('filtered: ', filtered);

  // const multiplied = filtered.map(number => number * 2);
  // console.log('multiplied: ', multiplied);

  // const sorted = multiplied.sort();
  // console.log('sorted: ', sorted);

  // const result = numbers
  //   .filter(number => number > 5)
  //   .map(number => number * 2)
  //   .sort()
  //   .slice(0, 2)
  //   .map(x => x * 4)
  //   .reverse();

  // console.log('result: ', result);

  /**
   * Задача на подумать.
   *
   * Если массив оценок пользователей. Необходимо написать
   * код который:
   *  - Выберет все оценки пользователя с указанным id.
   *  - Отсортирует их в возврастающем порядке.
   *  - Выберет первые N оценок и посчитает среднюю оценку
   */
  // const scores = [
  //   { id: 1, score: 5 },
  //   { id: 2, score: 10 },
  //   { id: 2, score: 15 },
  //   { id: 1, score: 10 },
  //   { id: 2, score: 20 },
  //   { id: 2, score: 10 },
  // ];
})();
