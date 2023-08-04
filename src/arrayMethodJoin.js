'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let JOINED_ARRAY = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] != null && this[i] !== undefined) {
        JOINED_ARRAY += this[i];
      }

      if (i !== this.length - 1) {
        JOINED_ARRAY += separator;
      }
    }

    return JOINED_ARRAY;
  };
}

module.exports = applyCustomJoin;
