'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    const arr = this;
    let sep = separator;
    let res = '';

    if (sep === undefined) {
      sep = ',';
    } else if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];

      if (item !== null && item !== undefined) {
        res += item.toString();
      }

      if (i + 1 < arr.length) {
        res += sep.toString();
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
