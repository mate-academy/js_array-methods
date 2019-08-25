'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newSeparator = separator;
    let newString = '';
    if (separator === undefined) {
      newSeparator = ',';
    }
    if (separator === null) {
      newSeparator = 'null';
    }
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        newString += this[i];
        break;
      }
      this[i] === null || this[i] === undefined ? newString += ','
        : newString += this[i] + newSeparator;
    }
    return newString;
  };
}

module.exports = applyCustomJoin;
