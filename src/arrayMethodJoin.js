'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this.length === 1) {
        return String(this);
      }

      if (this[i] !== undefined && this[i] !== null) {
        result += String(this[i]);
      }

      if (i !== this.length - 1) {
        result += String(separator);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
