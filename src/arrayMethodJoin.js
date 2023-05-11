'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else if (typeof this[i] === 'string'
      && this[i] === 'null') {
        result += 'null';
      } else if (isNaN(this[i])) {
        result += 'NaN';
      } else {
        result += this[i];
      }

      if (i < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
