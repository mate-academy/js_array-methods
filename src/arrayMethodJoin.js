'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arr = [...this];
    let str = '';

    if (!arr.length) {
      return '';
    }

    if (arr.length === 1) {
      return `${arr[0]}`;
    }

    for (let index = 0; index < arr.length; index++) {
      if (arr[index] !== null && arr[index] !== undefined) {
        str += `${arr[index]}`;
      }

      if (index !== arr.length - 1) {
        str += `${separator}`;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
