const logger = message => console.log(message);

logger('hello wwwrwr');

class Human {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}

const human = new Human('poly');

human.getName();

const x = [1, 2, 3].reduce((acc, item) => acc + item, 0);

console.log(x);

const numbers = [1, 4];
const [a, c] = numbers;
