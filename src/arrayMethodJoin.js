'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let element;

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += separator;
      }

      element = this[i];

      if ((element === undefined) || (element === null)) {
        result += '';
      } else {
        result += element;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
