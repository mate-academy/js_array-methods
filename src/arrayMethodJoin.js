'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let resultStr;

    if (this[0] !== null) {
      resultStr = `${this[0]}`;
    } else {
      resultStr = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultStr += separator;
      } else {
        resultStr += separator + `${this[i]}`;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
