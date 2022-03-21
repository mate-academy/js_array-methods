'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newStr = ``;

    if (this[0] === undefined || this[0] === null || this[0] === '') {
      newStr += '';
    } else {
      newStr += `${this[0]}`;
    }

    let el;

    for (let i = 1; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null || this[i] === '') {
        el = '';
      } else {
        el = this[i];
      }

      if (separator === undefined) {
        newStr += ',' + el;
      } else if (separator === '') {
        newStr += el;
      } else {
        newStr += `${separator}` + el;
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
