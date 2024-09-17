'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';

    for (let i = 0; i < this.length; i++) {
      if (Number.isNaN(this[i])) {
        this[i] = 'NaN';
      } else if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        joinResult += this[i];
      } else {
        joinResult += this[i] + `${separator}`;
      }
    }

    return joinResult;
  };
}

module.exports = applyCustomJoin;
