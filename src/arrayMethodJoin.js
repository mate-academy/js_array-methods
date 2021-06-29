'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i < this.length - 1) {
        newJoin += `${this[i]}${separator}`;
      } else if (i === this.length - 1) {
        newJoin += `${this[i]}`;
      }
    }

    return newJoin;
  };
}

module.exports = applyCustomJoin;
