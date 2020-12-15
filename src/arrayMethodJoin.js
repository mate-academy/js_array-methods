'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this === undefined || this === null || this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        string += this[i];
      }

      if (i !== this.length - 1) {
        string += separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
