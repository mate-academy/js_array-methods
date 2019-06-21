'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let str = '';

    // const elem of this) {
    //   this[this.length] = elem;
    // }
    // return this.length;

    this.forEach(function(i, index, array) {
      if (typeof (i) === 'undefined' || i === null) {
        str += '';
        if (index !== (array.length - 1)) {
          str += separator;
        }
      } else {
        str += i;
        if (index !== (array.length - 1)) {
          str += separator;
        }
      }
    });
    return str;
  };
}

module.exports = applyCustomJoin;
