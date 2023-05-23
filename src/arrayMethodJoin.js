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

    let str = '';

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === undefined || arr[i] === null) {
        arr[i] = '';
      }

      if (i === arr.length - 1) {
        str += `${arr[i]}`;
        break;
      }

      str += `${arr[i]}${separator}`;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
