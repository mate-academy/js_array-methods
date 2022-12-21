'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let copySeparator = separator;

    if (copySeparator === null) {
      copySeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i < this.length - 1) {
        result += this[i] + copySeparator;
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
