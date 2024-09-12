'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let concatenatedStr = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element !== undefined && element !== null) {
        concatenatedStr += element;
      }

      if (i + 1 < this.length) {
        concatenatedStr += separator;
      }
    }

    return concatenatedStr;
  };
}

module.exports = applyCustomJoin;
