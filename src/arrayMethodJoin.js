'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separators = separator;
    const arr = [...this];
    let str = '';

    if (separators === null) {
      separators = 'null';
    }

    if (arr.length === 0) {
      return '';
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null || arr[i] === undefined) {
        str += separators;
        continue;
      }

      if (i === arr.length - 1) {
        str += arr[i];
        continue;
      }
      str += arr[i] + separators;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
