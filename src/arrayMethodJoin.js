'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    let newSeperator = separator;

    if (separator === null) {
      newSeperator = 'null';
    }

    for (const key of this) {
      switch (key) {
        case null:
        case undefined:
          result += newSeperator + '';
          break;
        default:
          result += newSeperator + key;
          break;
      }
    }

    // remove first separator
    if (result.includes(separator)) {
      result = result.replace(separator, '');
    }

    return result;
  };
}

module.exports = applyCustomJoin;
