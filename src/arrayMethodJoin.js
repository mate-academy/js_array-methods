'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const wordSeparator = String(separator);
    let result = '';

    if (this.length === 1) {
      result = String(this[0]);

      return result;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      result += this[i];

      if (i !== this.length - 1) {
        result += wordSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
