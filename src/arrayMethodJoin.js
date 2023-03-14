'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const joinSeparator = separator;

    const arr = [...this];

    let res = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null || arr[i] === undefined) {
        arr[i] = '';
      }

      if (i === arr.length - 1) {
        res += arr[i];
      } else {
        res += arr[i] + '' + joinSeparator;
      }
    }

    return res;
  };
};

module.exports = applyCustomJoin;
