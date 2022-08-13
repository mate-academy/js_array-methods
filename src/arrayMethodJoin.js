'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    let step = 0;

    if (this.lenght === 0) {
      return resultString;
    }

    for (const element of this) {
      if (element !== undefined && element !== null) {
        resultString += element;
      }

      if (step !== this.length - 1) {
        resultString += separator;
      }
      step++;
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
