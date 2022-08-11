'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let k = 0; k < this.length; k++) {
      if (this[k] !== null && this[k] !== undefined) {
        str += this[k];
      }

      if (k !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
