'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultString = '';
    const arrayLength = this.length;
    const validSeparator = typeof separator === 'undefined' ? ',' : separator;

    if (arrayLength <= 0) {
      return '';
    }

    for (let i = 0; i <= arrayLength - 2; i++) {
      const stringToConcat = getValidValue(this[i]);

      resultString += stringToConcat;
      resultString += validSeparator;
    }
    resultString += getValidValue(this[arrayLength - 1]);

    return resultString;
  };
}

function getValidValue(value) {
  return value === null || typeof value === 'undefined' ? '' : value;
}

module.exports = applyCustomJoin;
