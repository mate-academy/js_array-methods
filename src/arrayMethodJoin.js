'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (result) {
        result += separator;
      }

      result += this[i];
    }

    if (
      !this[0]
      && this[0] !== false
      && this[0] !== 0
      && this.length !== 0
    ) {
      return `,,${result}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
