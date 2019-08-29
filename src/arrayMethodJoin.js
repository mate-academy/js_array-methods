'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let defaultSeparator = separator + '';
    if (separator === undefined) {
      defaultSeparator = ',';
    }
    if (this.length === 0) {
      return result;
    }
    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '' + defaultSeparator;
      } else {
        result = result + this[i] + defaultSeparator;
      }
    }
    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
