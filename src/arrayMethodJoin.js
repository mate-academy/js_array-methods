'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }
      if (i !== this.length - 1) {
        output += `${this[i]}${separator}`;
      } else {
        output += `${this[i]}`;
        return output;
      }
    }
    return output;
  };
}

module.exports = applyCustomJoin;
