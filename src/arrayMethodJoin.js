'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (result.length === 0 && this.length !== 1) {
        result = `${this[i]}${separator}`;
      } else if (i + 1 !== this.length) {
        result = `${result}${this[i]}${separator}`;
      } else {
        result = `${result}${this[i]}`;
      }
    }

    return result;
  };
};

module.exports = applyCustomJoin;
