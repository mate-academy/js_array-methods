'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    const arr = [...this];

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined || arr[i] === null) {
        arr[i] = '';
      }
    }

    let str = `${arr[0]}`;

    for (let i = 1; i < arr.length; i++) {
      str += `${separator}${arr[i]}`;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
