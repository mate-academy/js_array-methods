'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length <= 1) {
      return this.toString();
    }

    let newStr = '';
    let newSeparator = separator;

    if (separator === undefined || separator === 'null') {
      newSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i < this.length - 1
        && this[i] !== null
        && this[i] !== undefined) {
        newStr += this[i];
        newStr += newSeparator;
      }

      if (i < this.length - 1
        && (this[i] === null || this[i] === undefined)) {
        newStr += newSeparator;
      }

      if (i === this.length - 1) {
        newStr += this[i];
      }
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
