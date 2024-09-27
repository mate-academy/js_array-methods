'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let str = '';
    const separatorStr = String(separator);

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += separatorStr;
      } else {
        str += this[i] + separatorStr;
      }
    }

    str += this[this.length - 1];

    return str;
  };
}

module.exports = applyCustomJoin;
