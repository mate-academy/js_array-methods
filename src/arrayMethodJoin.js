'use strict';
/* eslint-disable no-console */

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let x = 0; x < this.length; x++) {
      if (this[x] !== null && this[x] !== undefined) {
        result += `${this[x]}`;
      }

      if (x < this.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
