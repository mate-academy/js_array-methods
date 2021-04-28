'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0) {
        str += separator;
      };

      if (this[i] !== undefined && this[i] !== null) {
        str += this[i];
      };
    };

    return str;
  };
};

module.exports = applyCustomJoin;
