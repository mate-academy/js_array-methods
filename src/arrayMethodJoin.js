'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      if (i === null) {
        i = '';
      }

      if (i !== undefined) {
        res += this[i];

        if (i === this.length - 1) {
          break;
        }
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
