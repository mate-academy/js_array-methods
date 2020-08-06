'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let item;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        item = '';
      } else {
        item = this[i];
      }

      result += item;

      if (i !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
