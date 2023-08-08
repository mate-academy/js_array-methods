'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let returnString = '';

    for (let i = 0; i < this.length; i++) {
      const item = this[i];

      if (i > 0) {
        returnString += separator;
      }

      if (item !== undefined && item !== null) {
        returnString += item;
      }
    }

    return returnString;
  };
}

module.exports = applyCustomJoin;
