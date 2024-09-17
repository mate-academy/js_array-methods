'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const newSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += newSeparator;
      } else if (i !== this.length - 1) {
        result += `${this[i]}${newSeparator}`;
      } else {
        result += this[i];
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
