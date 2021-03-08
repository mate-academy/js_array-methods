'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length) {
      let string = '';

      for (let i = 0; i < this.length; i++) {
        if (this[i] !== undefined && this[i] !== null) {
          string += this[i];
        }

        if (i !== this.length - 1) {
          string += separator;
        }
      }

      return string;
    }

    return '';
  };
}

module.exports = applyCustomJoin;
