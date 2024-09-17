'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';

    for (let x = 0; x < this.length; x++) {
      if (this[x] !== null && this[x] !== undefined) {
        joinString += this[x];
      }

      if (x < this.length - 1) {
        joinString += separator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
