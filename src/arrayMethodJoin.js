'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let modifString = '';
    if (this.length === 0) {
      return modifString;
    }
    const strseparator = separator === undefined ? ',' : separator + '';
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        modifString += strseparator;
      } else {
        modifString += this[i] + strseparator;
      }
    }
    modifString += this[this.length - 1];
    return modifString;
  };
}

module.exports = applyCustomJoin;
