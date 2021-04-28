'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === 0) {
        strJoin += `${this[i]}`;
      } else {
        strJoin += `${separator}${this[i]}`;
      }
    }

    return strJoin;
  };
}

module.exports = applyCustomJoin;
