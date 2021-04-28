'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strJoin = '';
    let str;

    for (let i = 0; i < this.length; i++) {
      str = this[i];

      if (this[i] === null || this[i] === undefined) {
        str = '';
      }

      if (i === 0) {
        strJoin += str;
      } else {
        strJoin += `${separator}${str}`;
      }
    }

    return strJoin;
  };
}

module.exports = applyCustomJoin;
