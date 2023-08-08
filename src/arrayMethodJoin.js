'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    for (let i = 0; i < this.length - 1; i++) {
      const element = this[i];

      if (element !== undefined && element !== null) {
        resultString += element;
      }

      resultString += separator;
    }

    const lastElement = this[this.length - 1];

    if (lastElement === undefined || lastElement === null) {
      return resultString;
    }

    return resultString + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
