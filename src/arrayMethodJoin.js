'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        string += separator;
      }

      if (this[i] !== null && this[i] !== undefined) {
        string += this[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
