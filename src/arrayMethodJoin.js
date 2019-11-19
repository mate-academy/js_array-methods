'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const checkedSeparator = separator === undefined ? ',' : separator + '';
    let result = '';

    if (this.length === 0) {
      return result;
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += checkedSeparator;
      } else {
        result += this[i] + checkedSeparator;
      }
    }
    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
