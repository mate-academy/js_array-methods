'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let symbal = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        symbal = `${this[i]}`;
      }

      if (i < this.length - 1) {
        result += symbal + separator;
      } else {
        result += symbal;
      }

      symbal = '';
    }

    return result;
  };
}

module.exports = applyCustomJoin;
