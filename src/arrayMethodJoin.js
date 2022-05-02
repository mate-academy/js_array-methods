'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const lengthOfSeperator = String(separator).length;

    for (const item of this) {
      if (item === null || item === undefined) {
        joinedString += separator;
      } else {
        joinedString += `${item}${separator}`;
      }
    }

    return separator === ''
      ? joinedString : joinedString.slice(0, -lengthOfSeperator);
  };
}

module.exports = applyCustomJoin;
