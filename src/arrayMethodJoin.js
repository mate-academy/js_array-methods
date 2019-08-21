'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    const sep
      = separator === undefined ? ',' : separator == null ? 'null' : separator;

    for (let i = 0; i < this.length; i++) {
      this[i] === undefined || this[i] === null
        ? (str += sep)
        : this.length > 1 && i < this.length - 1
          ? (str += this[i] + sep)
          : (str += this[i]);
    }

    return str;
  };
}

module.exports = applyCustomJoin;
