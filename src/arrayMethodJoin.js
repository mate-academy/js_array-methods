'use strict';

/**
 * Implement method join
*/

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (!this.length) {
      return '';
    }

    const separatorStr = String(separator);

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += separatorStr;
      } else {
        string += this[i] + separatorStr;
      }
    }

    string += this[this.length - 1];

    return string;
  };
}

module.exports = applyCustomJoin;
