'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const newSeparator = separator;

    for (let i = 0; i < this.length; i += 1) {
      if (this[i] !== undefined && this[i] !== null) {
        string += this[i];
      }

      if (i + 1 !== this.length) {
        string += newSeparator;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
