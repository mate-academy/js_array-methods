'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      const el = this[i];

      if (el !== undefined && el !== null) {
        string += el;
      };

      if (i !== this.length - 1) {
        string += separator;
      };
    };

    return string;
  };
}

module.exports = applyCustomJoin;
