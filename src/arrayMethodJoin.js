'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinWithSeparator = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] == null || this[i] === undefined) {
        joinWithSeparator += separator;
      } else if (i === this.length - 1) {
        joinWithSeparator += this[i];
      } else if (separator == null) {
        joinWithSeparator += this[i] + 'null';
      } else {
        joinWithSeparator += this[i] + separator;
      }
    }

    return joinWithSeparator;
  };
}

module.exports = applyCustomJoin;
