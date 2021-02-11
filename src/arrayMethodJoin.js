'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let joinStr = '';

    if (this.length === 1) {
      joinStr += this;
    }

    if (this.length > 1) {
      if (this[0] !== null) {
        joinStr += this[0];
      }

      for (let i = 1; i < this.length; i++) {
        if (separator === null) {
          joinStr += null + this[i].toString();
        } else if (this[i] === null || this[i] === undefined) {
          joinStr += separator;
        } else {
          joinStr += separator + this[i];
        }
      }
    }

    return joinStr;
  };
}

module.exports = applyCustomJoin;
