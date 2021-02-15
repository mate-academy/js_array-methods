'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let value = '';
    const stringedSeparator = separator + '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        value += this[i];

        return value;
      }
      value += this[i] + stringedSeparator;
    }

    return value;
  };
}

module.exports = applyCustomJoin;
