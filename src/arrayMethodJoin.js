'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = (this[0] === null) ? '' : '' + this[0];
    const separ = (separator === undefined) ? ',' : separator;

    if (!this.length) {
      return '';
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        string += '' + separ;
      } else {
        string += `${separ}${this[i]}`;
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
