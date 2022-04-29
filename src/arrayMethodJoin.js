'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separateWith = String(separator);

    let joined = '';

    for (const item of this) {
      if (item !== undefined && item !== null) {
        joined += item;
      }
      joined += separateWith;
    }

    return joined.slice(0, joined.lastIndexOf(separator));
  };
}

module.exports = applyCustomJoin;
