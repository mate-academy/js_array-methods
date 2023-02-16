'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultedString = '';

    for (let i = 0; i < this.length; i++) {
      const char = this[i];

      if (char !== undefined && char !== null) {
        resultedString += char;
      }

      if (i < this.length - 1) {
        resultedString += separator;
      }
    }

    return resultedString;
  };
}

module.exports = applyCustomJoin;
