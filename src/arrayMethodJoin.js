'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const sep = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += String(this[i]);
      }

      result += i !== (this.length - 1) ? sep : '';
    }

    return result;
  };
}

module.exports = applyCustomJoin;
