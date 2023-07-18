'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    const elementToString = (value) =>
      value !== null && value !== undefined
        ? value : '';

    for (let i = 0; i < this.length - 1; i++) {
      resultString += elementToString(this[i]);
      resultString += separator;
    }

    resultString += elementToString(this[this.length - 1]);

    return resultString;
  };
}

module.exports = applyCustomJoin;
