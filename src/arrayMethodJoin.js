'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        result += '';
      } else {
        result += this[i];
      }

      if (i !== this.length - 1) {
        if (separator === undefined) {
          result += ',';
        } else {
          result += separator;
        }
      }
    }

    return result.trim();
  };
}

module.exports = applyCustomJoin;

