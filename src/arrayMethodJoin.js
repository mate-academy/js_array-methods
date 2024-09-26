'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';
    const stringSeparator = separator;

    for (let i = 0; i < this.length; i++) {

      if (this[i] !== null && this[i] !== undefined) {
        joinString += this[i];
      }

      if (i !== this.length - 1) {
        joinString += stringSeparator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
