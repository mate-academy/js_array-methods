'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let glue = '';

    if (separator === undefined) {
      glue = ',';
    } else {
      glue = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += '';
      } else {
        str += this[i];
      }

      if (i !== this.length - 1) {
        str += glue;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
