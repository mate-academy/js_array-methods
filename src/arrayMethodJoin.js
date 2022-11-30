'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    let normalizedSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null | this[i] === undefined) {
        this[i] = '';
      }

      if (separator === null) {
        normalizedSeparator = 'null';
      }

      if (i < this.length - 1) {
        string += this[i] + normalizedSeparator;
      } else {
        string += this[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
