'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedValuesFromArray = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== null && element !== undefined) {
        joinedValuesFromArray += element;
      }

      if (i < this.length - 1) {
        joinedValuesFromArray += separator;
      }
    }

    return joinedValuesFromArray;
  };
}

module.exports = applyCustomJoin;
