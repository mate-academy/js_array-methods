'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let finalSeparator = separator;

    if (separator === undefined) {
      finalSeparator = ',';
    }

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        string += this[i];
      }

      if (i !== this.length - 1) {
        string += finalSeparator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
