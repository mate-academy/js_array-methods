'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let separators = separator;

    if (separator === undefined) {
      separators = ',';
    }

    let result = '';
    const str = String(separators);
    const arrayLength = this.length;

    for (let i = 0; i < arrayLength; i++) {
      const element = this[i];

      if (element === undefined || element === null) {
        result += '';
      } else {
        result += element;
      }

      if (i !== arrayLength - 1) {
        result += str;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
