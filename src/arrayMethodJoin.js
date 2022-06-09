'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newSring = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        newSring += this[i];
      }

      if (i !== this.length - 1) {
        newSring += separator;
      }
    }

    return newSring;
  };
}

module.exports = applyCustomJoin;
