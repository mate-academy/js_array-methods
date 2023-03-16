'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let actualSep = separator;

    if (separator === undefined) {
      actualSep = ',';
    }

    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += actualSep;
      }

      if (this[i] != null) {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
