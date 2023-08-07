'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let newSeparator = separator;

    if (this.length === 0) {
      return result;
    }

    if (separator === undefined) {
      newSeparator = ',';
    }

    if (separator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === undefined) {
          return result;
        }

        return result + this[i];
      }

      if (this[i] === null || this[i] === undefined) {
        result += newSeparator;
      } else {
        result += this[i] + newSeparator;
      }
    }
  };
}

module.exports = applyCustomJoin;
