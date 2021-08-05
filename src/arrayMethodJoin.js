'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let symbol = separator;

    if (symbol === undefined) {
      symbol = ',';
    } else if (symbol === null) {
      symbol = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        string += this[i];
      } else {
        if (this[i] === null || this[i] === undefined) {
          string += '' + symbol;
        } else {
          string += this[i] + symbol;
        }
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
