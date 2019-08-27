'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    const divider = separator === undefined
      ? ','
      : separator == null
        ? 'null'
        : separator;

    for (let i = 0; i < this.length; i++) {
      str += this[i] === undefined || this[i] === null
        ? divider
        : this.length > 1 && i < this.length - 1
          ? (this[i] + divider)
          : this[i];
    }

    return str;
  };
}

module.exports = applyCustomJoin;
