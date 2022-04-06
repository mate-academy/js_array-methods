'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this.length > 0 && this[i] !== null && this[i] !== undefined) {
        str += this[i];
      }

      if (i !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}
module.exports = applyCustomJoin;
