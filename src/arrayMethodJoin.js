'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let exit = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        exit += this[i];
      }

      if ((this.length - 1) !== i) {
        exit += separator;
      }
    }

    return exit;
  };
}

module.exports = applyCustomJoin;
