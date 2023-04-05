'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let connectedParts = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] != null) {
        connectedParts += this[i];
      }

      if (i !== this.length - 1) {
        connectedParts += separator;
      }
    }

    return connectedParts;
  };
}

module.exports = applyCustomJoin;
