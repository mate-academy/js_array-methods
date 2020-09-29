'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let jointedStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        jointedStr += this[i];
      }

      if (i !== this.length - 1) {
        jointedStr += separator;
      }
    }

    return jointedStr;
  };
}

module.exports = applyCustomJoin;
