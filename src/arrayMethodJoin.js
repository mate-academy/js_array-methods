'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (const elem of this) {
      if (elem == null || elem === undefined) {
        result += separator;
      } else if (this.indexOf(elem) === this.length - 1) {
        result += elem;
      } else if (separator == null) {
        result += elem + 'null';
      } else {
        result += elem + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
