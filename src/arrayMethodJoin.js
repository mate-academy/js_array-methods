'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let sepStr = separator;
    let str = '';

    if (this.length === 0) {
      return '';
    }

    if (this.length === 1) {
      return this.toString();
    }

    if (separator === null) {
      sepStr = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i !== this.length - 1) {
        str += this[i] + sepStr;
      } else {
        str += this[i];
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
