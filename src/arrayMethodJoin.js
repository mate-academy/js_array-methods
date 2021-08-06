'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length <= 1) {
      return this.toString();
    }

    let newStr = '';

    for (let i = 0; i < this.length; i++) {
      if (i < this.length - 1
        && this[i] !== null
        && this[i] !== undefined) {
        newStr += this[i];
        newStr += separator;
      }

      if (i < this.length - 1
        && (this[i] === null || this[i] === undefined)) {
        newStr += separator;
      }

      if (i === this.length - 1) {
        newStr += this[i];
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
