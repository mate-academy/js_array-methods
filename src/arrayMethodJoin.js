'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let newSeparator = separator;

    if (newSeparator === undefined) {
      newSeparator = ',';
    }

    if (newSeparator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let current = this[i];

      if (current === null || current === undefined) {
        current = '';
      }

      if (i !== this.length - 1) {
        result += current + newSeparator;
      } else {
        result += current;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
