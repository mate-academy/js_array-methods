'use strict';

/**
 * Implement method join
*/

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const firstElem = isNullOrUndefined(this[0]);
    const lastElem = `${separator}${isNullOrUndefined(this[this.length - 1])}`;

    if (this.length === 1) {
      return String(this[0]);
    } else if (this.length === 0) {
      return resultString;
    }

    for (let i = 1; i <= this.length - 2; i++) {
      if (typeof this[i] === 'undefined' || (String((this[i])) === 'null')) {
        this[i] = '';
      }
      resultString += `${separator}${this[i]}`;
    }

    return firstElem + resultString + lastElem;
  };
}

function isNullOrUndefined(value) {
  if (typeof value === 'undefined' || (String(value) === 'null')) {
    return '';
  }

  return value;
}

module.exports = applyCustomJoin;
