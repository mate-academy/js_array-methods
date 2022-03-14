'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    this.forEach((str, i) => {
      let s = str;

      if (s === null || s === undefined) {
        s = '';
      }
      result += `${s}`;

      if (this.length > i + 1) {
        result += `${separator}`;
      }
    });

    return result;
  };
}

module.exports = applyCustomJoin;
