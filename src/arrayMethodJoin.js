'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    let result = this[0] + '';

    if (this[0] === null) {
      result = '';
    }

    const joiner = separator + '';

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += joiner;
      } else {
        result += joiner + this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
