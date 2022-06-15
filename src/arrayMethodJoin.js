'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';


    for (const word of this) {
      if (word !== undefined && word !== null) {
        res += `${word}`;

        if (res.length === (this.length) * 2 - 1) {
          break;
        }
        res += `${separator}`;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
