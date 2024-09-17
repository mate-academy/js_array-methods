'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let customJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        customJoin += separator;
      };

      if (this[i] !== null
      && this[i] !== undefined) {
        customJoin += this[i];
      };
    };

    return customJoin;
  };
}

module.exports = applyCustomJoin;
