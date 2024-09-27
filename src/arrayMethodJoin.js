'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const countSymbols = (this.length - 1) * 2;
    let newString = '';
    let index = 0;

    for (let i = 0; i <= countSymbols; i++) {
      if (i % 2 === 0) {
        if (this[index] !== undefined && this[index] !== null) {
          newString += this[index];
        } else {
          newString += '';
        }
        index++;
      } else {
        newString += separator;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
