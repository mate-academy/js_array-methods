'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const mainArrayClone = [];
    let mainSeparatorClone = separator;

    if (this.length === 0) {
      return '';
    }

    if (separator === null) {
      mainSeparatorClone = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        mainArrayClone[i] = '';
      } else {
        mainArrayClone[i] = this[i];
      }
    }

    let resultString = `${mainArrayClone[0]}`;

    for (let i = 1; i < mainArrayClone.length; i++) {
      resultString += mainSeparatorClone + mainArrayClone[i];
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
