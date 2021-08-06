'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        str += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        str += ',';
      } else {
        str += `${this[i]}${separator}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
