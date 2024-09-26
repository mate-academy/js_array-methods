'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultingStr = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        resultingStr += separator;
      }

      const element = this[i];

      if (element !== null
        && element !== undefined) {
        resultingStr += element;
      }
    }

    return resultingStr;
  };
}

module.exports = applyCustomJoin;
