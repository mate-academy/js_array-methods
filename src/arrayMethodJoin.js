'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let resultString = '';
    let separatorString;

    if (separator === null) {
      separatorString = 'null';
    } else {
      separatorString = separator;
    }

    if (this[0] !== null && this[0] !== undefined) {
      resultString = '' + this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString += separatorString + '';
      } else {
        resultString += separatorString + this[i];
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
