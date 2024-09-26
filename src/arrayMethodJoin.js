'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      const isValid = this[i] !== undefined && this[i] !== null;

      if (isValid) {
        str += this[i];
      }

      const lastCharacter = this.length - 1;

      if (i !== lastCharacter) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
