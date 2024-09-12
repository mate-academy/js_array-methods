'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinText = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] != null) {
        joinText += `${this[i]}`;
      }

      joinText += `${separator}`;
    }

    if (this.length > 0 && this[this.length - 1] != null) {
      joinText += this[this.length - 1];
    }

    return joinText;
  };
}

module.exports = applyCustomJoin;
