'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let count = 0;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        str += this[i];
        count++;
      } else {
        str += '';
        count++;
      }

      if (count < this.length) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
