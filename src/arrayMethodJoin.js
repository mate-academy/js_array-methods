'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const el of this) {
      if (el === null || el === undefined) {
        string += ',';
        continue;
      }

      if (el === this[this.length - 1]) {
        string += el;
        continue;
      }

      string += el + `${separator}`;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
