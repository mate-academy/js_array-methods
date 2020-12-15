'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this.toString();
    }

    let result = this[0];
    const realSep = (separator === undefined) ? ',' : `${separator}`;

    if (this[0] === null) {
      result = '';
    }

    for (let i = 1; i < this.length; i++) {
      if ((this[i] === null) || (this[i] === undefined)) {
        result += realSep;
        continue;
      }

      result += realSep + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
