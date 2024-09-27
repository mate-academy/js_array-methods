'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const length = this.length;
    let str = '';

    for (let i = 0; i < length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        str += this[i];
      }

      if (length - 1 !== i) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
