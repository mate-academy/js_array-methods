'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    let resultString = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      resultString += `${this[i]}` + separator;
    }

    resultString += `${this[this.length - 1]}`;

    return resultString;
  };
}

module.exports = applyCustomJoin;
