'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let divider = separator;

    if (this.length === 0) {
      return '';
    } else if (divider === undefined) {
      divider = ',';
    } else if (divider === null) {
      divider = 'null';
    } else if (this[0] === null) {
      this[0] = '';
    }

    let result = this[0].toString();

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      result += divider + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
