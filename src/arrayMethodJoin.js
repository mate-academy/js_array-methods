'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let convertedString = String(this[0]);
    const sep = String(separator);

    if (this[0] === null || this[0] === undefined) {
      convertedString = '';
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        convertedString += sep;
      } else {
        convertedString += sep + this[i];
      }
    }

    return convertedString;
  };
}

module.exports = applyCustomJoin;
