'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    const STRING_SEPARATOR = String(separator);
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        finalString += STRING_SEPARATOR;
        continue;
      }

      finalString += this[i] + STRING_SEPARATOR;
    }

    return finalString.slice(0, finalString.length - STRING_SEPARATOR.length);
  };
}

module.exports = applyCustomJoin;
