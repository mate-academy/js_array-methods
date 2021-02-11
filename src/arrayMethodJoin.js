'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    if (this.length) {
      for (let i = 0; i < this.length - 1; i++) {
        let value = this[i];
        let symbol = separator;

        if (this[i] === undefined
          || this[i] === null) {
          value = '';
        }

        if (separator === undefined) {
          symbol = ',';
        } else if (separator === null) {
          symbol = 'null';
        } else if (separator === '') {
          symbol = '';
        }

        result += value + symbol;
      }

      result += this[this.length - 1];
    };

    return result;
  };
}

module.exports = applyCustomJoin;
