'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      let item = this[i];

      if (item === null || item === undefined) {
        item = '';
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
