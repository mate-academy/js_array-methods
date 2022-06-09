'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join = '';

    for (const item of this) {
      if (item !== undefined && item !== null) {
        join += item;
      }

      if (this.indexOf(item) !== this.length - 1) {
        join += separator;
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
