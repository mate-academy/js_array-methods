'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let param = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        param += this[i];
      }

      if (i !== this.length - 1) {
        param += separator;
      }
    }

    return param;
  };
}

module.exports = applyCustomJoin;
