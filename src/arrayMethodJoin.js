'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const part = this[i];

      if (part !== undefined && part !== null) {
        result += part;
      }

      if ((i < this.length - 1)) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
