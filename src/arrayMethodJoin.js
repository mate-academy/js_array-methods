'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const lastIndex = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
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
