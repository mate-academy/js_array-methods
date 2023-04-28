'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedValues = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedValues += this[i];
      }

      if (i !== this.length - 1) {
        joinedValues += separator;
      }
    }

    return joinedValues;
  };
}

module.exports = applyCustomJoin;
