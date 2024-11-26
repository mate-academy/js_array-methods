'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorString = String(separator);
    let string = '';

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      string += this[i] + separatorString;
    }

    return string + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
