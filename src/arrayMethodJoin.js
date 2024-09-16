'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let sep;
    let x;

    if (separator !== undefined) {
      sep = separator;
    } else {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        x = '';
      } else {
        x = this[i];
      }

      if (x !== undefined) {
        if (i < this.length - 1) {
          result = result + x + sep;
        } else {
          result = result + x;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
