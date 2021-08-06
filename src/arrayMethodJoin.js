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

    for (let i = 1; i < cloneElements.length; i += 2) {
      cloneElements.splice(i, 0, separatorToString);
    }

    for (const element of cloneElements) {
      if (element === null || element === undefined) {
        continue;
      }
      arrayToString += element;
    }

    return arrayToString;
  };
}

module.exports = applyCustomJoin;
