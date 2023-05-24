'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        str += this[i];
      }

      if (i < this.length - 1) {
        if (separator === undefined) {
          str += ',';
        } else if (separator !== undefined) {
          str += separator;
        }
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
