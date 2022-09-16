'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = (',')) {
    let result = '';

    if (!this.length) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        result += nullCheck(this[i]);
      } else {
        result += nullCheck(this[i]) + separator;
      }
    }

    return result;
  };

  function nullCheck(value) {
    if (value === null || value === undefined) {
      return '';
    }

    return value.toString();
  }
}

module.exports = applyCustomJoin;
