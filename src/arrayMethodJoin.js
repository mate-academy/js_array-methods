'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';

    if (this.length) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] == null) {
          str += '';
        } else {
          str += this[i];
        }

        if (separator === undefined) {
          str += ',';
        } else if (separator == null) {
          str += 'null';
        } else {
          str += separator;
        }
      }

      if (this[this.length - 1] == null) {
        str += '';
      } else {
        str += this[this.length - 1];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
