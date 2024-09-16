'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let connector;

    if (this.length === 0) {
      return string;
    }

    separator === null ? connector = 'null' : connector = separator;

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      string += this[i] + connector;
    }

    return string + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
