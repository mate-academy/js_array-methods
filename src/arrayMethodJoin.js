'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let NewString = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        NewString += `${this[i]}`;
      }

      if (i !== this.length - 1) {
        NewString += `${separator}`;
      }
    }

    return NewString;
  };
};

module.exports = applyCustomJoin;
