'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (const element of this) {
      if (element !== undefined && element !== null) {
        joinedStr += element + '' + separator;
      } else {
        joinedStr += separator;
      }
    }

    joinedStr = joinedStr.substring(
      0, joinedStr.length - String(separator).length
    );

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
