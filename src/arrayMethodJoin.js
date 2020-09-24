'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const emptyValues = [null, undefined];

    for (let i = 0; i < this.length; i++) {
      if (!emptyValues.includes(this[i])) {
        joinedString += this[i];
      }

      if (i < this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
