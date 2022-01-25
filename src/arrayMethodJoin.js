'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let stringAfterJoin = '';

    if (!this.length) {
      return stringAfterJoin;
    }

    const indexOfLast = this.length - 1;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        stringAfterJoin += this[i];
      }

      if (i === indexOfLast) {
        return stringAfterJoin;
      }
      stringAfterJoin += separator;
    }
  };
}

module.exports = applyCustomJoin;
