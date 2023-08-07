'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      if (i > 0 && separator !== undefined) {
        string += separator;
      }

      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
