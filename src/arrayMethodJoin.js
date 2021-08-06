'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let arrayToString = '';
    const cloneElements = this.concat();
    const separatorToString = separator + '';

    for (let i = 0; i < cloneElements.length; i++) {
      if (cloneElements[i] === null || cloneElements[i] === undefined) {
        arrayToString += separatorToString;
        continue;
      }

      if (i === cloneElements.length - 1) {
        arrayToString += cloneElements[i];
        break;
      }

      arrayToString += cloneElements[i] + separatorToString;
    }

    return arrayToString;
  };
}

module.exports = applyCustomJoin;
