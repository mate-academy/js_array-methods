'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const a of this) {
      if (a !== null && a !== undefined) {
        if (this.indexOf(a) !== this.length - 1) {
          result += a;
          result += separator;
        } else {
          result += a;
        }
      } else {
        if (this.indexOf(a) !== this.length - 1) {
          result += '';
          result += separator;
        } else {
          result += '';
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
