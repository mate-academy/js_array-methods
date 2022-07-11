'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        joined += '';
      } else {
        joined += this[i];
      }

      if (i !== this.length - 1) {
        joined += separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
