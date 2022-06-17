'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (const el of this) {
      let insert = '';

      if (el !== null && el !== undefined) {
        insert = el;
      }

      if (el === this[this.length - 1]) {
        string += '' + insert;
      } else {
        string += '' + insert + separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
