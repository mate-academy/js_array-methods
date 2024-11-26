'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const delimiter = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        result += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        result += delimiter;
      } else {
        result += (this[i] + delimiter);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
