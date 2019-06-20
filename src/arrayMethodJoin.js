'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this[0] === null || typeof this[0] === 'undefined') {
      this[0] = '';
    }

    let result = '' + this[0];

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      }
      result = result + separator + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
