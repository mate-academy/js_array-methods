'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';
    const lastItem = this[this.length - 1];

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== undefined) && (this[i] !== null)) {
        newString += this[i];
      }

      if (this[i] !== lastItem) {
        newString += separator;
      }
    }

    return newString;
  };
}

module.exports = applyCustomJoin;
