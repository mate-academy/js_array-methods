'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let mergedString = '';
    const length = this.length - 1;

    for (let i = 0; i <= length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        mergedString += this[i];
      }

      if (i !== length) {
        mergedString += separator;
      }
    }

    return mergedString;
  };
}

module.exports = applyCustomJoin;
