'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let delimiter = separator;

    if (delimiter === undefined) {
      delimiter = ',';
    };

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        result += delimiter;
      }

      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
