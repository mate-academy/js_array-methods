'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(rawSeparator = ',') {
    const separator = String(rawSeparator);
    let joinedArr = String();

    for (const element of this) {
      joinedArr += filter(element) + separator;
    }

    return joinedArr.length > 0 && separator.length > 0
      ? joinedArr.slice(0, -(separator.length)) : joinedArr;
  };
}

function filter(rawElement) {
  return isSkipped(rawElement) ? '' : rawElement;
}

function isSkipped(element) {
  return element === undefined || element === null;
}

module.exports = applyCustomJoin;
