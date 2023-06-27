'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const length = this.length;

    for (let i = 0; i < length; i++) {
      if (i > 0) {
        if (separator !== undefined) {
          result += separator;
        } else {
          result += ',';
        }
      }

      if (this[i] !== undefined && this[i] !== null) {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
