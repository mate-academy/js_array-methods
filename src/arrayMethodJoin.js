'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let createStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        createStr += `${this[i]}`;
      }

      if (i !== this.length - 1) {
        createStr += separator;
      }
    }

    return createStr;
  };
}

module.exports = applyCustomJoin;
