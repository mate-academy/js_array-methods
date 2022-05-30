'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sString = '';

    for (let i = 0; i < this.length; i += 1) {
      if (this[i] !== undefined && this[i] !== null) {
        sString += this[i];
      }

      if (i + 1 !== this.length) {
        sString += separator;
      }
    }

    return sString;
  };
};

module.exports = applyCustomJoin;
