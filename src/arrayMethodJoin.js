'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinStr = '';
    const separatorStr = `${separator}`;

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] !== null && this[i] !== undefined) {
        joinStr += this[i];
      } else if (this[i] !== null && this[i] !== undefined) {
        joinStr += this[i] + separatorStr;
      } else if (i === this.length - 1) {
        break;
      } else {
        joinStr += separatorStr;
      }
    }

    return joinStr;
  };
}

module.exports = applyCustomJoin;
