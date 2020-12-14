'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let a = String(separator);

    if (separator === undefined) {
      a = ',';
    }

    const arr = [];
    let firstString = '';
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        firstString += '';
      } else {
        firstString += this[i];
      }

      if (i !== this.length - 1) {
        firstString += a;
      }
    }

    for (let i = 0; i < firstString.length; i++) {
      arr[i] = firstString[i];
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === null || arr[i] === undefined) {
        resultString += 24;
      }

      resultString += '' + arr[i];
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
