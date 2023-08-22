'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(SEPARATOR = ',') {
    // write code here
    let RESULT = '';

    for (let i = 0; i < this.length; i++) {
      const CURRENT_NUMBER = this[i];

      if (CURRENT_NUMBER !== null && CURRENT_NUMBER !== undefined) {
        RESULT += CURRENT_NUMBER;
      }

      if (i !== this.length - 1) {
        RESULT += SEPARATOR;
      }
    }

    return RESULT;
  };
}

module.exports = applyCustomJoin;
