'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = ``;

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (separator === undefined) {
        result += this[i] + ',';
      } else if (separator === null) {
        result += this[i] + 'null';
      } else {
        result += this[i] + separator;
      }
    }

    return result + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
