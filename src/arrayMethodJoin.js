'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length; i++) {
      const unit = this[i];

      if (unit !== undefined && unit !== null) {
        res += unit;
      }

      if (i !== this.length - 1) {
        res += separator;
      }
    }

    return res;
  };
}

module.exports = applyCustomJoin;
