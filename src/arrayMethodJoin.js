'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (i > 0) {
        finalString += separator;
      }

      if (element !== undefined && element !== null) {
        finalString += element;
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
