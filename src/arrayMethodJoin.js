'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    }

    let result = '';
    const strSeparator = separator + '';

    for (let index = 0; index < this.length - 1; index++) {
      if (this[index] === null
        || this[index] === undefined) {
        result += strSeparator;
        continue;
      }

      result += this[index] + strSeparator;
    }

    if (this[this.length - 1] === null
      || this[this.length - 1] === undefined) {
      result += '';
    } else {
      result += this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
