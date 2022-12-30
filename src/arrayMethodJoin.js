'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        this[i] = '';
      }

      if (i < this.length - 1) {
        joined += this[i]
          + (separator !== null ? separator.toString() : 'null');
      } else {
        joined += this[i];
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
