'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let modSeparator = separator;

    if (separator === undefined) {
      modSeparator = ',';
    }

    if (separator === null) {
      modSeparator = 'null';
    }

    if (this.length === 0) {
      return result;
    }

    if (this.length === 1) {
      result += this[0];

      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      }

      if (i !== this.length - 1) {
        result += modSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
