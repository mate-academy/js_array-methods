'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';

    for (let i = 0; i < this.length; i++) {
      resultStr += this[i] === undefined || this[i] === null
        ? ''
        : this[i];

      if (i + 1 !== this.length) {
        resultStr += separator;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
