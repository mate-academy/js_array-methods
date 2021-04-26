'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinString = '';

    if (this.length !== 0) {
      for (let element of this) {
        if (element === undefined || element === null) {
          element = '';
        }

        joinString += `${element}${separator}`;
      }
    }

    return joinString.slice(0, joinString.lastIndexOf(separator));
  };
}

module.exports = applyCustomJoin;
