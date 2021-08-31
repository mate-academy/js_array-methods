'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = ``;
    let add = String(separator);

    if (separator === undefined) {
      add = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += '';
      } else {
        str += this[i];
      }

      if (i + 1 < this.length) {
        str += add;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
