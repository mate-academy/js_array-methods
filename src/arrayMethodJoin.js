'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let symbol = '';

    (separator === undefined) ? symbol = ',' : symbol = separator;

    let result = '';

    for (let i = 0; i < this.length; i++) {
      (this[i] === null
        || this[i] === undefined)
        ? result += ''
        : result += this[i];

      if (i !== this.length - 1) {
        result += symbol;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
