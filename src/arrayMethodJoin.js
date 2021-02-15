'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        newString += '';
      } else {
        newString += this[i];
      }

      if (i < this.length - 1) {
        newString += separator;
      }
    }

    return newString;
  };
};

module.exports = applyCustomJoin;
