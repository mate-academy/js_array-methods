'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let string = '';
    let insert = '';

    for (const el of this) {
      if (el !== null && el !== undefined) {
        insert = el;
      }

      if (el === this[this.length - 1]) {
        string += '' + insert;
      } else {
        string += '' + insert + separator;
      }

      insert = '';
    }

    return string;
  };
}

module.exports = applyCustomJoin;
