'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join = '';

    if (this.length === 0) {
      return join;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        join += separator;
      } else {
        join += this[i];

        if (i + 1 < this.length) {
          join += separator;
        }
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
