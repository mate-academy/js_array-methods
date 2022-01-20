'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separ = separator;
    let result = '';

    if (separator === null) {
      separ = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      let x = this[i];

      if (x === undefined || x === null) {
        x = '';
      }
      result += x + separ;
    }

    if (this[this.length - 1]) {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
