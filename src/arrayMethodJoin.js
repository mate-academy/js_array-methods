'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    if (this.length === 1) {
      return this.toString();
    }

    for (let i = 0; i < this.length; i++) {
      const char = this[i];

      if (char === undefined || char === null) {
        string += separator;
      } else if (i !== this.length - 1) {
        string += char.toString() + separator;
      } else {
        string += char.toString();
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
