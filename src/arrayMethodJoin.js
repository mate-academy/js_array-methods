'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const joinedArr = [];
    let j = 0;
    let newSeparator = separator;

    if (newSeparator === undefined) {
      newSeparator = ',';
    }

    for (let i = 0; i < (this.length - 1) * 2 - 1; i++) {
      if (this[j] === null || this[j] === undefined) {
        joinedArr[i] = '';
      } else {
        joinedArr[i] = this[j];
      }
      joinedArr[i + 1] = newSeparator;
      i++;
      j++;
    }

    if (this[this.length - 1] === null || this[this.length - 1] === undefined) {
      joinedArr[joinedArr.length] = '';
    } else {
      joinedArr[joinedArr.length] = this[this.length - 1];
    }

    let str = '';

    for (const e of joinedArr) {
      str += e;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
