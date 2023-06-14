'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedSting = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joinedSting += this[i];
      }

      if (i < this.length - 1) {
        joinedSting += separator;
      }
    }

    return joinedSting;
  };
}
module.exports = applyCustomJoin;
