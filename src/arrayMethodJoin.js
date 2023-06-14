'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringifiedArr = '';

    for (let i = 0; i < this.length; i++) {
      if (typeof this[i] !== 'undefined' && this[i] !== null) {
        stringifiedArr += `${this[i]}`;
      }

      if (i < this.length - 1) {
        stringifiedArr += `${separator}`;
      }
    }

    return stringifiedArr;
  };
}

module.exports = applyCustomJoin;
