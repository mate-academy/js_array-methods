'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (const elem of this) {
      if (elem === undefined || elem === null) {
        result += '';
      } else {
        result += elem;
      }

      if (this.indexOf(elem) !== this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
