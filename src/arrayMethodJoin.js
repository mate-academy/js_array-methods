'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinedString = checkNullUndefined(this[0]);

    for (let i = 1; i < this.length; i++) {
      joinedString += separator + checkNullUndefined(this[i]);
    }

    return joinedString;
  };
}

function checkNullUndefined(value) {
  return String((value === null || value === undefined) ? '' : value);
}

module.exports = applyCustomJoin;
