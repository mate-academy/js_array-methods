'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const inputArray = [...this];
    let correctSeparator;
    let resultStr = '';

    if (typeof separator === 'string'
      || typeof separator === 'number') {
      correctSeparator = separator;
    } else if (typeof separator === 'undefined') {
      correctSeparator = ',';
    } else if (typeof separator === 'object' && separator !== null) {
      correctSeparator = '[object Object]';
    } else if (separator == null) {
      correctSeparator = 'null';
    }

    if (!this.length || this[0] === null || this[0] === undefined) {
      resultStr = '';
    } else {
      resultStr += inputArray[0];
    }

    for (let i = 1; i < inputArray.length; i++) {
      if (inputArray[i] === null
        || inputArray[i] === undefined) {
        resultStr += correctSeparator + '';
      } else {
        resultStr += correctSeparator + inputArray[i];
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
