'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this[0] === null) {
      this[0] = '';
    }

    let result = '' + this[0];
    const workSepar = '' + separator;

    if (this.length === 0) {
      return '';
    }

    for (let i = 1; i <= this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      result += workSepar + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
