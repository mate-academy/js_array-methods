'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinString += this[i];
      } else {
        joinString += '';
      }

      if (i !== this.length - 1) {
        joinString += separator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
