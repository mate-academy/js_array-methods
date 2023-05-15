'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const lastIndex = this.length - 1;

    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }

      if (i !== lastIndex) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
