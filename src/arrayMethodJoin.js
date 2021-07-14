'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let sep = ',';

    if (this.length === 0) {
      return '';
    }

    if (separator !== undefined) {
      sep = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += sep;
      }

      if (this[i] !== null
        && this[i] !== undefined
        && this[i] !== '') {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
