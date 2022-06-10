'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
        let joined = '';

    for (const item of this) {
      if (item !== undefined && item !== null) {
        joined += item;
      }

      if (this.indexOf(item) !== this.length - 1) {
        joined += separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
