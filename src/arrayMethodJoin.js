'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let delimeter = separator;

    if (delimeter === undefined) {
      delimeter = ',';
    } else if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += delimeter;
      } else if (i === this.length - 1) {
        result += this[i];
      } else {
        result += this[i].toString() + delimeter;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
