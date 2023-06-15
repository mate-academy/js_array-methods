'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (i !== 0) {
        newString += separator;
      }

      if (element !== null && element !== undefined) {
        newString += element;
      }
    }

    return newString;
  };
}
module.exports = applyCustomJoin;
