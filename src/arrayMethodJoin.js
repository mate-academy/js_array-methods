'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';
    const _separator = separator === undefined ? ',' : separator;

    for (let i = 0; i < this.length; i++) {
      switch (this[i]) {
        case null:
          str += '';
          break;
        case undefined:
          str += '';
          break;
        default:
          str += this[i];
      }

      if (i !== this.length - 1) {
        str += _separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
