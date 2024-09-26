'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      let block = this[i];

      if (this[i] === null || this[i] === undefined) {
        block = '';
      }

      if (i === this.length - 1) {
        result += block;
      } else {
        result += block + `${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
