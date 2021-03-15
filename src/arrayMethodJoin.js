'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      }

      if (typeof separator === 'undefined') {
        result += this[i] + ',';
      } else if (!separator && separator !== '') {
        result += this[i] + 'null';
      } else {
        result += this[i] + separator;
      }
    }

    result += this[this.length - 1];

    return result;
  };
}

module.exports = applyCustomJoin;
