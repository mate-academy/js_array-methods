'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i <= this.length - 1; i++) {
      if (i === this.length - 1) {
        result = result + this[i];
      } else {
        if (this[i] === null || this[i] === undefined) {
          result = result + separator;
        } else {
          result = result + this[i] + separator;
        };
      };
    };

    return result;
  };
};

module.exports = applyCustomJoin;
