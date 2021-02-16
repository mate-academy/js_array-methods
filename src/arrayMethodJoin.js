'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let counter = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && typeof this[i] !== 'undefined') {
        counter += this[i];
      }

      if (!(i === this.length - 1)) {
        counter += separator;
      }
    }

    return counter;
  };

  return this;
}

module.exports = applyCustomJoin;
