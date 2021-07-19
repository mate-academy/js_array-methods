'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      string += `${this[i]}` + `${separator}`;
    }

    string += this[this.length - 1];

    if (this.length === 0) {
      string = '';
    }

    return string;
  };
}

module.exports = applyCustomJoin;
