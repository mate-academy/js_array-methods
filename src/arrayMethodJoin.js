'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    if (!this.length) {
      return '';
    }

    for (const char of this) {
      if (char !== undefined && char !== null) {
        joined += char;
      }

      if (char !== this[this.length - 1]) {
        joined += separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
