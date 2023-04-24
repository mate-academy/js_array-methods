'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newArray = [];

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        newArray[i] = '';
      } else {
        newArray[i] = this[i];
      }
    }

    let result = '';

    for (let i = 0; i < newArray.length; i++) {
      result += newArray[i];

      if (i !== newArray.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
