'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const arr = [...this];
    let str = '';

    for (let i = 0; i < arr.length; i++) {
      switch (arr[i]) {
        case undefined:
          arr[i] = '';
          break;
        case NaN:
          arr[i] = 'NaN';
          break;
        case false:
          arr[i] = 'false';
          break;
        case null:
          arr[i] = '';
          break;
      }

      if (i === 0) {
        str = str + arr[i];
      } else {
        str = str + separator + arr[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
