'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const character = this[i];

      if (character !== undefined && character !== null) {
        result += character;
      }

      if (this.length - 1 > i) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
