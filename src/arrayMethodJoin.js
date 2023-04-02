'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const sep = separator === undefined ? ','
      : separator === null ? 'null' : String(separator);
    let result = '';

    for (let i = 0; i < this.length; i++) {
      result += (i > 0 ? sep : '')
        + (this[i] === null || this[i] === undefined ? '' : String(this[i]));
    }

    return result;
  };
}

module.exports = applyCustomJoin;
