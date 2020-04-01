'use strict';

/**
 * Implement method join
*/

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let firstElem = '';
    let lastElem = '';

    switch (this.length) {
      case 0 :
        return resultString;
      case 1:
        return String(this[0]);

      default:
        firstElem = isNullOrUndefined(this[0]);
        lastElem = `${separator}${isNullOrUndefined(this[this.length - 1])}`;

        for (let i = 1; i <= this.length - 2; i++) {
          resultString += `${separator}${isNullOrUndefined(this[i])}`;
        }
    }

    return firstElem + resultString + lastElem;
  };
}

function isNullOrUndefined(value) {
  if (value === undefined || value === null) {
    return '';
  }

  return value;
}

module.exports = applyCustomJoin;
