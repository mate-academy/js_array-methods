'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let mySeparatop = separator;

    if (separator === null) {
      mySeparatop = null + '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        result += this[i];
      } else {
        result += this[i] + mySeparatop;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
