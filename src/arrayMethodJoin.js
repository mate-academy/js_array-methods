'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      result += this[i].toString();

      if (i < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}
applyCustomJoin();

const myArray = [1, 2, 3];

myArray.join2('-');

// module.exports = applyCustomJoin;
