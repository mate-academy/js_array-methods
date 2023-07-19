'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null && this[i].length !== 0) {
        string += this[i];
      }

      if (i !== this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}
module.exports = applyCustomJoin;
