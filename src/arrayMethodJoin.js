'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let separate = separator;

    if (separate === undefined) {
      separate = ',';
    }

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        str += '';
      } else {
        str += this[i];
      };

      if ([i] < this.length - 1) {
        str += separate;
      }
    };

    return str;
  };
}

module.exports = applyCustomJoin;
