'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resStr = '';

    for (let i = 0; i < this.length; i += 1) {
      const character = this[i];

      if (character !== null && character !== undefined) {
        resStr += character;
      }

      if (i < this.length - 1) {
        resStr += separator;
      }
    }

    return resStr;
  };
}

module.exports = applyCustomJoin;
