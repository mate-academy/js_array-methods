'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let results = '';
    const separatorToString = separator + '';
    const seperatorLength = separatorToString.length;

    for (const item of this) {
      if (item === null || item === undefined) {
        results += separator;
      } else {
        results += `${item}${separator}`;
      }
    }

    if (separator === '') {
      return results;
    } else {
      return results.slice(0, -seperatorLength);
    }
  };
}

module.exports = applyCustomJoin;
