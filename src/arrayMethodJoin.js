'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      const elem = this[i];

      if (elem !== null && elem !== undefined) {
        joined += elem;
      }

      if (i !== this.length - 1) {
        joined += separator;
      }
    };

    return joined;
  };
}

module.exports = applyCustomJoin;
