'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      // get rid off null and undefined
      if ((this[i] !== undefined) && (this[i] !== null)) {
        result += this[i];
      }

      // separator
      if ((i < this.length - 1) && (separator === undefined)) {
        result += ',';
      }

      if ((i < this.length - 1) && (separator !== undefined)) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
