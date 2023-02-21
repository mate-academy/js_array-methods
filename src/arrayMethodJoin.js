'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0 && i < this.length) {
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
