'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const arr = this;
    let sep = separator;
    let res = '';

    if (sep === null) {
      sep = 'null';
    }

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];

      if (item !== null && item !== undefined) {
        res += `${item}`;
      }

      if (i + 1 < arr.length) {
        res += `${sep}`;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
