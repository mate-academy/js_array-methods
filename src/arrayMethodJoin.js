'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    const arrLength = this.length;
    let resultStr = '';

    for (let i = 0; i < arrLength; i++) {
      if (typeof this[i] === 'undefined'
      || this[i] === null) {
        resultStr += '';
      } else {
        resultStr += this[i];
      }

      if (i !== arrLength - 1) {
        resultStr += separator;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
