'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';

    const lastIndex = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        joined += this[i];
      }

      if (i !== lastIndex) {
        joined += separator;
      }
    }

    return joined;
  };
}
module.exports = applyCustomJoin;
