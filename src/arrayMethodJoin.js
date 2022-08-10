'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const signSepar = (!separator && separator !== null && separator !== '')
      ? ','
      : separator;

    if (this.length > 0) {
      for (let i = 0; i < this.length - 1; i++) {
        if (this[i] !== undefined
          && this[i] !== null) {
          result += this[i] + String(signSepar);
        } else {
          result += String(signSepar);
        }
      }

      if (this[this.length - 1] !== undefined
        && this[this.length - 1] !== null) {
        result += this[this.length - 1];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
