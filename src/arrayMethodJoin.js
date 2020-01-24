'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinSeparator = separator;

    if (this.length === 0) {
      return '';
    }

    if (joinSeparator === undefined) {
      joinSeparator = ',';
    }

    if (joinSeparator === null) {
      joinSeparator = 'null';
    }

    if (this[0] === null) {
      this[0] = '';
    }

    let string = String(this[0]);

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      const point = joinSeparator + this[i];

      string += point;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
