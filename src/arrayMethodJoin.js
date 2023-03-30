'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = `,`) {
    let join = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = ``;
      }

      if (i === this.length - 1) {
        join += `${this[i]}`;
        break;
      }

      join += `${this[i]}${separator}`;
    }

    return join;
  };
}

module.exports = applyCustomJoin;
