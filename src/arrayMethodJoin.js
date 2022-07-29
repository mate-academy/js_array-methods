'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let rez = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        rez += '';
      } else {
        rez += this[i];
      }
      rez += separator;
    }

    if (this[this.length - 1] === null || this[this.length - 1] === undefined) {
      rez += '';
    } else {
      rez += this[this.length - 1];
    }

    return rez;
  };
}

module.exports = applyCustomJoin;
