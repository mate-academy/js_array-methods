'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';
    if (this[0] !== null && this[0] !== undefined) {
      newString += this[0];
    }
    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        newString += `${separator}` + '';
        continue;
      }
      newString += `${separator}` + this[i];
    }
    return newString;
  };
}

module.exports = applyCustomJoin;
