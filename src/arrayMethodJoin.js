'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let newSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        newSeparator = 'null';
      } else if (separator === undefined) {
        newSeparator = ',';
      }

      if (i === this.length - 1) {
        result += this[i];
      } else {
        result += this[i] + newSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
