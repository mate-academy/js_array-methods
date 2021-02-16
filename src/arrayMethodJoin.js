'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinWithSeparator = '';

    for (const elem of this) {
      if (elem == null || elem === undefined) {
        joinWithSeparator += separator;
      } else if (this.indexOf(elem) === this.length - 1) {
        joinWithSeparator += elem;
      } else if (separator == null) {
        joinWithSeparator += elem + 'null';
      } else {
        joinWithSeparator += elem + separator;
      }
    }

    return joinWithSeparator;
  };
}

module.exports = applyCustomJoin;
