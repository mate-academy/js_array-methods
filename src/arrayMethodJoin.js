'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let char = String(separator);

    if (separator === undefined) {
      char = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if (i + 1 < this.length) {
        result += char;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
