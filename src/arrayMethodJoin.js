'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultJoin = '';

    if (this.length === 0) {
      return resultJoin;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null || this[i] === ' ') {
        resultJoin += separator;
      } else if (i === this.length - 1) {
        resultJoin += this[i];
      } else {
        resultJoin += this[i] + `${separator}`;
      }
    }

    return resultJoin;
  };
};

module.exports = applyCustomJoin;
