'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arrayInString = '';

    if (this === undefined || this === null || this.length === 0) {
      return '';
    }

    for (const ch of this) {
      if (ch !== null && ch !== undefined) {
        arrayInString += ch;
      }

      if (ch !== this[this.length - 1]) {
        arrayInString += separator;
      }
    }

    return arrayInString;
  };
}

module.exports = applyCustomJoin;
