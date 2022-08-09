'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        return '' + this;
      }

      if (result) {
        result += separator;
      }
      result += this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
