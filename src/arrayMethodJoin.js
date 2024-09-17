'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let str = this[0] + '';

    if (str === 'null') {
      str = '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      str += `${separator}${this[i]}`;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
