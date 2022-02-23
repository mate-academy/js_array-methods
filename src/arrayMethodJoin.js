'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const modifiedSeparator = `${separator}`;

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1 && this[i] !== undefined) {
        result += this[i];
        break;
      } else if (i === this.length - 1 && this[i] === undefined) {
        result += '';
        break;
      }

      if (this[i] !== null && this[i] !== undefined) {
        result += this[i] + modifiedSeparator;
      } else {
        result += modifiedSeparator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
