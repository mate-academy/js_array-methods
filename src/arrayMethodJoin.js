'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    const arr = [];
    let string = '';

    for (const elem of this) {
      arr.push(elem);
    }

    for (let i = 0; arr.length > i; i++) {
      if (arr[i] === null || arr[i] === undefined) {
        arr[i] = '';
      }

      if (i >= arr.length - 1) {
        string = `${string}${arr[i]}`;
      } else {
        string = `${string}${arr[i]}${separator}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
