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
      let checkedKey = key;

      if (key === null || key === undefined) {
        checkedKey = '';
      }

      result += newSeperator + checkedKey;
    }

    // remove first separator
    result = result.replace(separator, '');

    return result;
  };
}

module.exports = applyCustomJoin;
