'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = this;
    let joined = '';

    const separatorStr = String(separator);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null || arr[i] === undefined) {
        joined += '' + separatorStr;
      } else if (i < arr.length - 1) {
        joined += arr[i] + separatorStr;
      } else {
        joined += arr[i];
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
