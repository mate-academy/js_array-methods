'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringOutput = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== undefined && this[i] !== null)) {
        stringOutput += `${this[i]}`;
      }

      if (i !== this.length - 1) {
        stringOutput += `${separator}`;
      }
    }

    return stringOutput;
  };
}

module.exports = applyCustomJoin;
