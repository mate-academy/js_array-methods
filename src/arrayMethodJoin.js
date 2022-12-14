'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i !== this.length - 1 && typeof separator !== 'undefined') {
        result += separator;
      } else if (i !== this.length - 1 && typeof separator === 'undefined') {
        result += ',';
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
