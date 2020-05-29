'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let splittedThis = '';

    if (this.length === 1) {
      return `${this}`;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      (i === this.length - 1)
        ? splittedThis += `${this[i]}`
        : splittedThis += `${this[i]}${separator}`;
    }

    return splittedThis;
  };
}
module.exports = applyCustomJoin;
