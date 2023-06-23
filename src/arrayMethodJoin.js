'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let length = this.length;

    for (const elem of this) {
      if (elem !== null && elem !== undefined) {
        result += elem;
      }

      if (--length > 0) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
