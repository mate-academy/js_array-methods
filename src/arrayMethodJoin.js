'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinString = '';

    if (this.length > 0) {
      if (this[0] !== null) {
        joinString += this[0];
      }

      for (let i = 1; i < this.length; i++) {
        if (separator === null) {
          joinString += null + this[i].toString();
        } else if (this[i] === null || this[i] === undefined) {
          joinString += separator;
        } else {
          joinString += separator + this[i];
        }
      }
    }

    return joinString;
  };
}

module.exports = applyCustomJoin;
