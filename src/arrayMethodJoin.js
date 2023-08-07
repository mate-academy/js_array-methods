'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedArray = '';

    for (const word of this) {
      if (word != null && word !== undefined) {
        joinedArray += word;
      }

      if (this.indexOf(word) !== this.length - 1) {
        joinedArray += separator;
      }
    }

    return joinedArray;
  };
}

module.exports = applyCustomJoin;
