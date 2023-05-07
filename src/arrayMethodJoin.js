'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';
    const arr = [...this];
    const chengeddArr = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        arr[i] = '';
      }
    }

    if (this.length === 0
      || this === undefined
      || this === null) {
      return '';
    }

    for (const item of arr) {
      if (separator === null) {
        chengeddArr.push(item);
        chengeddArr.push('null');
      } else {
        chengeddArr.push(item);
        chengeddArr.push(separator);
      }
    }

    chengeddArr.length = chengeddArr.length - 1;

    for (const item of chengeddArr) {
      str += item;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
