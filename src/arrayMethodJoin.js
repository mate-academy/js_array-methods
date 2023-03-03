'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const len = this.length;

    for (let i = 0; i < len; i++) {
      if ((this[i] === null || this[i] === undefined) && (i !== len - 1)) {
        result += separator;
      } else if (this[i] === null || this[i] === undefined) {
        result += '';
      } else if (i === len - 1) {
        result += `${this[i]}`;
      } else {
        result += `${this[i]}${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
