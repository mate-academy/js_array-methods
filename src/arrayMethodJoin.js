'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let copySeparator = separator;
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === undefined) {
        copySeparator = ',';
      }

      if (this[i] === undefined || this[i] === null) {
        result += copySeparator;
        continue;
      }

      if (i === this.length - 1) {
        result += this[i];
      } else {
        result += `${this[i]}${copySeparator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
