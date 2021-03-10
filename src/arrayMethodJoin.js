'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length) {
      let result = '';

      for (let i = 0; i < this.length; i++) {
        if (this[i] !== null && this[i] !== undefined) {
          result += '';
        } else {
          this[i] = '';
        }

        if (i === 0) {
          result = `${this[0]}`;
        } else {
          result += separator + `${this[i]}`;
        }
      }

      return result;
    } else {
      return '';
    }
  };
}

module.exports = applyCustomJoin;
