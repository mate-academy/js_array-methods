'use strict';

/**
 * Implement method join
 */
function applyCustomJoin(value) {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';
    const lastElement = this.length - 1;

    if (this.length === 0) {
      return joinString;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinString += '';
      } else {
        joinString += this[i];
      }

      if (i < lastElement) {
        joinString += separator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
