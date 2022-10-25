'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrLength = this.length;
    let joinString = '';

    for (let i = 0; i < arrLength; i++) {
      if (this[i] === undefined || this[i] === null) {
        joinString += '';
      } else {
        joinString += this[i];
      }

      if (i !== arrLength - 1) {
        joinString += separator;
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
