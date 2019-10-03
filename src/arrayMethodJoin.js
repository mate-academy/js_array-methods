'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let sep = separator;
    if (sep === undefined) {
      sep = ',';
    }
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
        str = str + this[i] + sep;
      }
      if (this[i] !== this[this.length - 1]) {
        str = str + this[i] + sep;
      } else {
        str = str + this[i];
      }
    }
    return str;
  };
}

module.exports = applyCustomJoin;
