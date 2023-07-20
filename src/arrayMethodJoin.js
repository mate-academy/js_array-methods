'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let sep = separator;

    if (separator === undefined) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (i === this.length - 1) {
          break;
        }
        result += sep;
        continue;
      }
      result += this[i];

      if (i === this.length - 1) {
        break;
      }
      result += sep;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
