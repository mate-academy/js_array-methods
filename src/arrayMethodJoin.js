'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(sep = ',') {
    let joinArr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinArr += sep;
        continue;
      }

      joinArr += this[i];

      if (i !== this.length - 1) {
        joinArr += sep;
      }
    }

    return joinArr;
  };
};

module.exports = applyCustomJoin;
