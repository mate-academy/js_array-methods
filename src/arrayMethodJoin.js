'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resString += this[i];
      }

      if (i !== this.length - 1) {
        resString += separator;
      }
    }

    return resString;
  };
}

module.exports = applyCustomJoin;
