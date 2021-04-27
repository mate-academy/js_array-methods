'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strJoin = '';

    if (this.length === 0) {
      return strJoin;
    }

    for (let value of this) {
      if (this.length === 1) {
        strJoin += value;

        return strJoin;
      }

      if (value === undefined || value === null) {
        value = '';
        strJoin += `${separator}${value}`;
      } else {
        strJoin += `${separator}${value}`;
      }
    }

    const strJoinFix = strJoin.slice(`${separator}`.length, strJoin.length);

    return strJoinFix;
  };
}

module.exports = applyCustomJoin;
