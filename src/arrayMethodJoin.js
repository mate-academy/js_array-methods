'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (!this.length) {
      return string;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += separator;
      } else if (i === this.length - 1) {
        string += String(this[i]);

        return string;
      } else {
        string += String(this[i]) + separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
