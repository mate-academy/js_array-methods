'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let arg = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        arg += this[i];
      }

      if (i !== this.length - 1) {
        arg += separator;
      }
    }

    return arg;
  };
}

module.exports = applyCustomJoin;
