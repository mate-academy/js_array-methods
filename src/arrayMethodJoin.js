'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      if (i > 0) {
        string += separator;
      }

      const item = this[i];

      if (item !== undefined && item !== null) {
        string += item;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
