'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingString = '';

    for (const el of this) {
      if (this.length === 1) {
        resultingString += el;

        return resultingString;
      } else if (el === undefined || el === null || separator === undefined) {
        resultingString += ',';
      } else {
        resultingString += el;
        resultingString += separator;
      };
    };

    const indexOfLastSeparator = resultingString.lastIndexOf(separator);
    const result = resultingString.slice(0, indexOfLastSeparator);

    return result;
  };
}

module.exports = applyCustomJoin;
