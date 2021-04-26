'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinResult = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinResult += `${separator}`;
      } else
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
