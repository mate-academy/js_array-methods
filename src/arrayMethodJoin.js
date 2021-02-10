'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let sep = separator;

    if (separator === undefined) {
      sep = ',';
    }

    if (this.length) {
      let str = '';

      for (let i = 0; i < this.length; i++) {
        if (this[i] !== null && this[i] !== undefined) {
          str += this[i];
        }

        if (i < this.length - 1) {
          str += sep;
        }
      };

      return str;
    };
  };
}

module.exports = applyCustomJoin;
