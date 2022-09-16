'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      const item = this[i];

      if (item !== null && item !== undefined) {
        join += item;
      }

      if (i !== length - 1) {
        join += separator;
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
