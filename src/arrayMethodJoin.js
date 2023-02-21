'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const el = this[i];

      if (!(el === undefined) && !(el === null)) {
        result += el;
      }

      if (!(i === this.length - 1)) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
