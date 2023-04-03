'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const arr = this;
    let sep = separator;

    if (sep === undefined) {
      sep = ',';
    }

    let result = '';

    for (let i = 0; i < arr.length; i++) {
      const val = arr[i];

      if (i === arr.length - 1) {
        result += val === undefined || val === null ? '' : val.toString();
      } else {
        result += val === undefined || val === null ? '' : val.toString();
        result += sep;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
