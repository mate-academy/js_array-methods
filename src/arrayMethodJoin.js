'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this.length - 1 === i) {
        if (this[i] !== undefined) {
          str += this[i];
        }
      } else if (this[i] === null || this[i] === undefined) {
        str += separator;
      } else if (separator === null) {
        str += this[i] + 'null';
      } else if (separator === undefined) {
        str += this[i] + ',';
      } else {
        str += this[i] + separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
