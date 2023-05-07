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

    for (let i = 0; arr.length - 1 > i; i++) {
      if (arr[i] === null || arr[i] === undefined) {
        arr[i] = '';
      }

      string = `${string}${arr[i]}${separator}`;
    }

    if (arr[arr.length - 1] === null || arr[arr.length - 1] === undefined) {
      arr[arr.length - 1] = '';
    }

    string = `${string}${arr[arr.length - 1]}`;

    return string;
  };
}

module.exports = applyCustomJoin;
