'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    const divider = separator === undefined ? ',' : String(separator);

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      const item = this[i] === null || this[i] === undefined ? '' : this[i];

      str += i === this.length - 1 ? item : (item + divider);
    }

    return String(str);
  };
}

module.exports = applyCustomJoin;
