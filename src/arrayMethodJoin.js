'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    for (let item = 0; item < this.length; item++) {
      if (this[item] !== null && this[item] !== undefined) {
        str += this[item];
      }

      if (item !== this.length - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
