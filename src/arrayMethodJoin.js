'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const sep = separator === undefined || separator === undefined
      ? ',' : separator === null ? 'null' : separator.toString();
    let str = '';

    for (let i = 0; i < this.length; i++) {
      str = str + sep + (this[i] === null || this[i] === undefined
        ? '' : this[i]);
    }

    return str.substring(sep.length, str.length);
  };
}

module.exports = applyCustomJoin;
