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
    let glue = '';

    (separator === undefined) ? glue = ',' : glue = separator;

    for (let i = 0; i < this.length; i++) {
      (this[i] === null || this[i] === undefined) ? str += '' : str += this[i];

      if (i !== this.length - 1) {
        str += glue;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
