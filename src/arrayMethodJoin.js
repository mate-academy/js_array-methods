'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strItems = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        strItems += this[i];
      }

      if (i !== this.length - 1) {
        strItems += separator;
      }
    }

    return strItems;
  };
}

module.exports = applyCustomJoin;
