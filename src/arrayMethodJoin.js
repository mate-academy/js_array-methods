'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let connected = '';

    for (let i = 0; i < this.length; i++) {
      const addedItem = this[i];

      if (addedItem !== null && addedItem !== undefined) {
        connected += addedItem;
      }

      if (i !== this.length - 1) {
        connected += separator;
      }
    }

    return connected;
  };
}

module.exports = applyCustomJoin;
