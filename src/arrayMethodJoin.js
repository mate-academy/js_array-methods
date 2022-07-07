'use strict';

/**
 * Implement method join
 */

//подставить новые сепараторы
//перебрать массив
//если эл ок - добавить в новую строку
//соследний эл доб без сапаратора
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinedItems = '';
    let divider = separator;

    if (separator === undefined) {
      divider = ',';
    } else if (separator === null) {
      divider = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedItems += this[i];
      }

      if (i !== this.length - 1) {
        joinedItems += divider;
      }
    }

    return joinedItems;
  };
}

module.exports = applyCustomJoin;
