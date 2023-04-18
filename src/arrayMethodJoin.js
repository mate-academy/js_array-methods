'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorInner = separator + '';
    let res = '';

    for (const item of this) {
      if (item !== null && item !== undefined) {
        res += item;
      }

      res += separator;
    }

    if (separatorInner || separatorInner.length) {
      res = res.slice(0, -separatorInner.length);
    }

    return res;
  };
}

module.exports = applyCustomJoin;
