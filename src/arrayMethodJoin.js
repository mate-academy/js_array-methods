'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const separatorItem = String(separator);
    let joinResult = '';

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      joinResult += this[i] + separatorItem;
    }

    return joinResult + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
