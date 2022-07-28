'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let x = 0; x < this.length; x++) {
      if (this[x] !== undefined && this[x] !== null) {
        result += this[x];
      };

      if (x + 1 !== this.length) {
        result += separator;
      };
    };

    return result;
  };
};

module.exports = applyCustomJoin;
