'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    const cloneElements = this.concat();

    for (let i = 0; i < cloneElements.length - 1; i += 2) {
      cloneElements.splice(i + 1, 0, (separator + ''));
    }

    for (const element of cloneElements) {
      if (element === null || element === undefined) {
        continue;
      }
      result += element;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
