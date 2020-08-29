'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length < 1) {
      return string;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += separator;
        continue;
      }

      if (i === this.length - 1) {
        string = string + this[i];
      } else {
        string = string + this[i] + separator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
