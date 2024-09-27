'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const last = this[this.length - 1];

    for (const item of this) {
      if (item !== null && item !== undefined) {
        string += item;
      }

      if (item !== last) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
