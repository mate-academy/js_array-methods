'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringFromThis = '';
    const pseudoSeparator = separator;

    for (const n of this) {
      let item = n;

      if (n === undefined || n === null) {
        item = '';
      }

      stringFromThis += item;

      if (this.indexOf(n) !== this.length - 1) {
        stringFromThis += pseudoSeparator;
      }
    }

    return stringFromThis;
  };
}

module.exports = applyCustomJoin;
