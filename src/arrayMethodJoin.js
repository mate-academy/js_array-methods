'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i <= this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      }

      if (typeof separator === 'undefined') {
        result = this[i] + ',';
      } else {
        result = this[i] + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
