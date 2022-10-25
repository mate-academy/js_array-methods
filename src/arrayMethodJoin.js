'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newSeparator = separator + '';
    const lastItem = this.length - 1;
    let string = '';

    for (const ch of this) {
      if (this[lastItem] === ch && this[lastItem] === undefined) {
        continue;
      }

      if (this[lastItem] === ch) {
        string += ch;
        continue;
      }

      if (ch === null || ch === undefined) {
        string += newSeparator;
        continue;
      }

      string += ch + newSeparator;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
