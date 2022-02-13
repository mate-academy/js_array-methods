'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (!this.length) {
      return '';
    } else if (this.length < 2) {
      return `${this[0]}`;
    };

    let str = `${this[0]}`;

    if (this[0] === null || this[0] === undefined) {
      str = '';
    };

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += `${separator}`;
      } else {
        str += `${separator}${this[i]}`;
      };
    };

    return str;
  };
}

module.exports = applyCustomJoin;
