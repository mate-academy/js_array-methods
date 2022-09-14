'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let output = '';

    for (let i = 0; i < this.length; i++) {
      if (!(this[i] === null || this[i] === undefined)) {
        output += this[i];
      }

      output += '';

      if (i !== this.length - 1) {
        output += separator;
      }
    }

    return output;
  };
}

module.exports = applyCustomJoin;
