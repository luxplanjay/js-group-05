'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var logger = function logger(message) {
  return console.log(message);
};

logger('hello wwwrwr');

var Human = function () {
  function Human(name) {
    _classCallCheck(this, Human);

    this.name = name;
  }

  _createClass(Human, [{
    key: 'getName',
    value: function getName() {
      return this.name;
    }
  }]);

  return Human;
}();

var human = new Human('poly');

human.getName();

var x = [1, 2, 3].reduce(function (acc, item) {
  return acc + item;
}, 0);

console.log(x);

var numbers = [1, 4];
var a = numbers[0],
    c = numbers[1];