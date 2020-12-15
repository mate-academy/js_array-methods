'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (this.length === 0) {
      return '';
    }

    let str = '';
    let div = separator;

    if (separator === undefined) {
      div = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        str += div;
      } else {
        str += `${this[i]}`;

        if (i === this.length - 1) {
          return str;
        }
        str += div;
      }
    }
  };
}

module.exports = applyCustomJoin;
