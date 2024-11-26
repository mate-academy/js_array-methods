'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultStr = '';
    const separatorStr = String(separator);

    if (!this.length) {
      return resultStr;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        resultStr += separatorStr;
      } else if (i !== this.length - 1) {
        resultStr += this[i] + separatorStr;
      } else {
        resultStr += this[i];
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
