'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let res = '';

    if (this[0] === null) {
      res += ``;
    } else {
      res += `${this[0]}`;
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        res += `${separator}`;
      } else {
        res += `${separator}${this[i]}`;
      };
    }

    return res;
  };
}

module.exports = applyCustomJoin;
