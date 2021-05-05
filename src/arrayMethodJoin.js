'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        resultString += String(separator);
      } else if (i !== this.length - 1) {
        resultString += `${this[i]}${separator}`;
      } else {
        resultString += this[this.length - 1];
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
