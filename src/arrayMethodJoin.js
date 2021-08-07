'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinToString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinToString += separator;
        continue;
      }
      joinToString += this[i];

      if (i !== this.length - 1) {
        joinToString += separator;
      }
    }

    return joinToString;
  };
}

module.exports = applyCustomJoin;
