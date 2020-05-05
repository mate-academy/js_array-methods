'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let output = '';
    const sep = separator + '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        output += this[i];
      }
      output += sep;
    }

    return output.substring(0, output.length - sep.length);
  };
}

module.exports = applyCustomJoin;
