'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let newArr = '';
    let normalizedSeparator = separator;

    if (normalizedSeparator === undefined) {
      normalizedSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] == null) {
        newArr += '';
      } else {
        newArr += this[i];
      }

      if (i !== this.length - 1) {
        newArr += normalizedSeparator;
      }
    }

    return newArr;
  };
}

module.exports = applyCustomJoin;
