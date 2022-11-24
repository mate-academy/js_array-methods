'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    let sep = separator;

    if (separator === null) {
      sep = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== this[this.length - 1]) {
        if (this[i] !== undefined && this[i] !== null) {
          result += this[i] + sep;
          continue;
        }

        result += sep;
        continue;
      }

      if (this[i] === undefined || this[i] === null) {
        continue;
      }

      result += this[i];
    }

    return result;
  };
}
module.exports = applyCustomJoin;
