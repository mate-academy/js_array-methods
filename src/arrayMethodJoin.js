'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let res = '';
    const sep = separator !== undefined ? separator : ',';
    const arr = [...this];

    for (let i = 0; i < arr.length; i++) {
      if (
        (arr[i] || arr[i] === 0 || isNaN(arr[i]) || arr[i] === false)
        && arr[i] !== undefined
      ) {
        res += String(arr[i]);
      }
      res += sep;
    }

    res = res.substring(0, res.length - String(sep).length);

    return res;
  };
}

module.exports = applyCustomJoin;
