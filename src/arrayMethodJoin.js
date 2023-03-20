'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      (this[i] === null || this[i] === undefined)
        ? resultString += ''
        : resultString += `${this[i]}`;

      if (i !== this.length - 1) {
        resultString += `${separator}`;
      }
    }

    return resultString;
  };
};

module.exports = applyCustomJoin;
