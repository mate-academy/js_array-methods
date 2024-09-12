'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let methodJoin = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        methodJoin += this[i];
      }

      if (i < (this.length - 1)) {
        methodJoin += separator;
      }
    }

    return methodJoin;
  };
};

module.exports = applyCustomJoin;
