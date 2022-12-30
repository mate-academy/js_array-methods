'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      let current = this[i];

      if (current === null || typeof current === 'undefined') {
        current = '';
      }

      if (i < this.length - 1) {
        joined += current
          + (separator !== null ? separator.toString() : 'null');
      } else {
        joined += current;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
