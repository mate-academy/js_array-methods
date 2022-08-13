'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arr = '';
    const separatorCopy = separator + '';
    // console.log(this);

    for (let i = 0; i < this.length; i++) {
      arr += (this[i] === undefined || this[i] === null ? '' : this[i])
      + (i < this.length - 1 ? separatorCopy : '');
    // console.log(this[i]);
    }
    // console.log(arr);

    return arr;
  };
}

// const source = [1, 2, 3, 4];

// [false, null, 1, undefined, 0, NaN, ''].join2();

module.exports = applyCustomJoin;
