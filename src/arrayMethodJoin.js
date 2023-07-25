'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let pooled = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        pooled += this[i];
      }

      if (i !== this.length - 1) {
        pooled += separator;
      }
    };

    return pooled;
  };
}

module.exports = applyCustomJoin;
