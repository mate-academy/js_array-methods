'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let totalJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] == null) {
        totalJoin += separator;

        continue;
      }

      if (i === this.length - 1) {
        totalJoin += this[i];

        return totalJoin;
      }

      if (separator === undefined) {
        totalJoin += this[i] + ',';

        continue;
      }

      if (separator == null) {
        totalJoin += this[i] + 'null';

        continue;
      }

      totalJoin += this[i] + separator;
    }

    return totalJoin;
  };
}

module.exports = applyCustomJoin;
