'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let jointStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        jointStr += this[i];
      }

      if (i < this.length - 1) {
        jointStr += separator;
      }
    }

    return jointStr;
  };
}

module.exports = applyCustomJoin;
