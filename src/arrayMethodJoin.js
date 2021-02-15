'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let finalString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && typeof this[i] !== 'undefined') {
        finalString += this[i];
      }

      if (!(i === this.length - 1)) {
        finalString += separator;
      }
    }

    return finalString;
  };

  return this;
}
module.exports = applyCustomJoin;
