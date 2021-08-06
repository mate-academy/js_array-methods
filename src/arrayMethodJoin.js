'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let arrayToString = '';
    const cloneElements = [ ...this ];

    for (let i = 0; i < cloneElements.length; i++) {
      if (cloneElements[i] === null || cloneElements[i] === undefined) {
        arrayToString += `${separator}`;
        continue;
      }

      if (i === cloneElements.length - 1) {
        arrayToString += cloneElements[i];
        break;
      }

      arrayToString += cloneElements[i] + `${separator}`;
    }

    return arrayToString;
  };
}

module.exports = applyCustomJoin;
