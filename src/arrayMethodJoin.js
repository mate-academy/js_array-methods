'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = [...this];
    let str = arr[0] === null ? '' : arr[0];

    if (!arr.length) {
      return '';
    }

    if (arr.length === 1) {
      return `${str}`;
    }

    for (let index = 1; index < arr.length; index++) {
      if (arr[index] === undefined) {
        str += `${separator}`;
      } else if (arr[index] === 0 || isNaN(arr[index])) {
        str += `${separator}${arr[index]}`;
      } else {
        str += `${separator}${arr[index] || ''}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
