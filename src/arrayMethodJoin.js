'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let newSeparator = separator;

    if (this.length > 0) {
      if (separator === undefined) {
        newSeparator = ',';
      }

      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] !== undefined && this[i] !== null) {
          result = result + this[i] + newSeparator;
        } else {
          result = result + newSeparator;
        }
      }

      if (this[this.length - 1] !== undefined
        && this[this.length - 1] !== null) {
        result = result + this[this.length - 1];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
