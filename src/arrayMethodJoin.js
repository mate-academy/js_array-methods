'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = (',')) {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      result += nullCheck(this[i]);

      if (i !== this.length - 1) {
        result += separator;
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
