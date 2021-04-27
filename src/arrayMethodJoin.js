'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let calcSeparator = separator;

    if (this.length === 0) {
      return result;
    }

    if (calcSeparator === null) {
      calcSeparator = `${separator}`;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += calcSeparator;
        continue;
      }

      result += this[i];

      if (i !== this.length - 1) {
        result += calcSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
