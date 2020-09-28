'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        finalString += this[i];
      }

      if (this.length - 1 !== i) {
        if (separator === undefined) {
          finalString += ',';
        } else {
          finalString += separator;
        }
      }
    }

    return finalString;
  };
}

module.exports = applyCustomJoin;
