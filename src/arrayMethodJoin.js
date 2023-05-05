'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let strJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        strJoin += this[i];
      }

      if (i !== this.length - 1) {
        strJoin += separator;
      }
    }

    return strJoin;
  };
}

module.exports = applyCustomJoin;
