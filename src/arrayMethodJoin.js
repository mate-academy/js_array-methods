'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';

    if (!this.length) {
      return resultString;
    }

    for (const element of this) {
      if (element !== null && element !== undefined && element !== '') {
        resultString += element;
      }

      if (this.indexOf(element) !== this.length - 1) {
        resultString += separator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
