'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (const item of this) {
      if (item === null || item === undefined) {
        joined += separator;
        continue;
      }
      joined += item;

      if (this.lastIndexOf(item) !== this.length - 1) {
        joined += separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
