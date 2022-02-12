'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    let toAdd = '';

    for (let i = 0; i < this.length; i++) {
      toAdd = `${this[i]}`;

      if (this[i] === null || this[i] === undefined) {
        toAdd = '';
      }

      if (i < this.length - 1) {
        str += toAdd + separator;
      } else {
        str += toAdd;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
