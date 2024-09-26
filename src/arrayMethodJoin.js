'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let string = '';
    let sep = ',';

    if (separator !== undefined) {
      sep = separator + '';
    }

    if (this.length === 0) {
      return string;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] != null) {
        string += this[i];
      }

      if (i !== this.length - 1) {
        string += sep;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
