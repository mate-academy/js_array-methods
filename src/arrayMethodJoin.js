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
      if (!notAllowed.includes(this[i])) {
        resultStr += `${separator}` + `${this[i]}`;
      } else {
        resultStr += `${separator}`;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
