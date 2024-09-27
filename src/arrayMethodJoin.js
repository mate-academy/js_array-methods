'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringJoin = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        stringJoin += this[i];
      }

      if (i < length - 1) {
        stringJoin += separator;
      }
    }

    return stringJoin;
  };
}
module.exports = applyCustomJoin;
