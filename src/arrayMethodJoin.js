'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let resultSeparator = separator;

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      }

      if (typeof separator === 'undefined') {
        resultSeparator = ',';
      } else if (separator === null) {
        resultSeparator = 'null';
      }

      if (i !== this.length - 1) {
        result += this[i] + resultSeparator;
      } else {
        result += this[i];
      }
    };

    return result;
  };
}

module.exports = applyCustomJoin;
