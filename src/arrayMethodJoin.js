'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        if (i !== 0) {
          newString += separator;
        }
        continue;
      }

      if (i !== 0) {
        newString += separator;
      }
      newString += this[i];
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
