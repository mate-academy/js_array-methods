'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinNew = '';

    for (let i = 0; i < this.length; i++) {
      const copy = this[i];

      if (copy !== undefined && copy !== null) {
        joinNew += copy;
      }

      if (i !== this.length - 1) {
        joinNew += separator;
      };
    };

    return joinNew;
  };
};

module.exports = applyCustomJoin;
