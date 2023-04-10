'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let join = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        join += this[i];

        join += i !== this.length - 1
          && this.length - 1 !== undefined
          ? separator : '';
      } else if (i !== this.length - 1 && this.length - 1 !== undefined) {
        join += separator;
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
