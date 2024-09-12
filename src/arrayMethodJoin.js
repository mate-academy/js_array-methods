'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let adjoined = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        adjoined += this[i];
      }

      if (i !== this.length - 1) {
        adjoined += `${separator === undefined ? ',' : String(separator)}`;
      }
    }

    return adjoined;
  };
}

module.exports = applyCustomJoin;
