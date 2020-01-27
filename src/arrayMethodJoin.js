'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = this;
    let joined = '';

    for (let i = 0; i < arr.length; i++) {
      if (String(separator) === 'null') {
        if (i < arr.length - 1) {
          joined += arr[i] + 'null';
        } else {
          joined += arr[i];
        }
      } else if (arr[i] === null || arr[i] === undefined) {
        joined += '' + separator;
      } else if (i < arr.length - 1) {
        joined += arr[i] + separator;
      } else {
        joined += arr[i];
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
