'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length !== 0) {
      if (this[0] !== undefined && this[0] !== null) {
        string += this[0];
      }

      if (this.length > 1) {
        for (let i = 1; i < this.length; i++) {
          if (this[i] !== undefined && this[i] !== null) {
            string += String(separator) + this[i];
          } else {
            string += String(separator) + '';
          }
        }
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
