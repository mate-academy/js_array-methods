'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let connected = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        connected += this[i];
      }

      if (this.length - 1 !== i) {
        connected += separator;
      }
    }

    return connected;
  };
}

module.exports = applyCustomJoin;
