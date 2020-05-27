'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (Number.isNaN(this[i])) {
        this[i] = 'NaN';
      };

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      };

      result += i !== this.length - 1
        ? this[i] + `${separator}`
        : this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
