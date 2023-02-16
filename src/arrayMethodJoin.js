'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const len = this.length;

    if (len === 0) {
      return '';
    }

    for (let i = 0; i < len; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        str += this[i];
      }

      if (i !== len - 1) {
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
