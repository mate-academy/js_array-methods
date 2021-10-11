'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length; i++) {
      const char = this[i];
      const isValid = char !== undefined && char !== null;

      if (isValid) {
        if (i === this.length - 1) {
          resultString += `${this[i]}`;
        } else {
          resultString += `${this[i]}${separator}`;
        }
      } else {
        resultString += `${separator}`;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
