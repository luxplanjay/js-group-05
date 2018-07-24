'use strict';

// function Guest(name, room) {
//   this.name = name;
//   this.room = room;
// }

// Guest.prototype.changeRoom = function(num) {
//   this.room = num;
// };

// Guest.prototype.showName = function() {
//   console.log(this.name);
// };

// const mango = new Guest('Mango', 22);

// console.log(mango);

// mango.changeRoom(50);

// console.log(mango);
// mango.showName();

// const poly = new Guest('Poly', 12);

// console.log(poly);

// poly.changeRoom(666);
// console.log(poly);

// poly.showName();

// Наследование

function Hero(name, xp) {
  this.name = name;
  this.xp = xp;
}

Hero.prototype.gainXp = function(amount) {
  console.log(`${this.name} gained ${amount} experience points`);
  this.xp += amount;
};

const mango = new Hero('Mango', 1000);

console.log(mango);

function Warrior(name, xp, weapon) {
  Hero.call(this, name, xp);

  this.weapon = weapon;
}

Warrior.prototype = Object.create(Hero.prototype);

Warrior.prototype.constructor = Warrior;

Warrior.prototype.attack = function() {
  console.log(`${this.name} attacks with ${this.weapon}`);
};

const ajax = new Warrior('Ajax', 300, 'halberd');

console.log(ajax);
ajax.attack();
ajax.gainXp(500);
console.log(ajax);
