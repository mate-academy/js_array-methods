'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const sep = separator === undefined ? ',' : separator;

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return `${this[0]}`;
    }

    return this.reduce((a, b) => {
      const prev = (a === null || a === undefined) ? '' : a;
      const current = (b === null || b === undefined) ? '' : b;

      return `${prev}${sep}${current}`;
    });
  };
}

module.exports = applyCustomJoin;
