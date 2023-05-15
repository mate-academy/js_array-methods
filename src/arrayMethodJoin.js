'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let divider = separator;

    if (divider === undefined) {
      divider = ',';
    } else {
      divider = String(separator);
    }

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        result += divider;
      }

      if (this[i] !== null && this[i] !== undefined) {
        result += String(this[i]);
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
