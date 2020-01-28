'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let join = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        join += '' + `${separator}`;
      } else if (i !== this.length - 1) {
        join += this[i] + `${separator}`;
      } else {
        join += this[i];
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
