'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    if (this[0] === null) {
      this[0] = '';
    }

    let string = String(this[0]);

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      const point = String(separator) + this[i];

      string += point;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
