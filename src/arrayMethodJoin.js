'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';
    const notAllowed = [null, undefined];

    if (!notAllowed.includes(this[0])) {
      resultStr = `${this[0]}`;
    }

    for (let i = 1; i < this.length; i++) {
      resultStr += `${separator}`;

      if (!notAllowed.includes(this[i])) {
        resultStr += `${this[i]}`;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
