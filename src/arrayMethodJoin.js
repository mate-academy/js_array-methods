'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let jointedString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        jointedString += this[i];
      }

      if (i !== this.length - 1) {
        jointedString += separator;
      }
    }

    return jointedString;
  };
}

module.exports = applyCustomJoin;
