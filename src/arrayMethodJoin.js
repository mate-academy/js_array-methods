'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let sep = separator;
    let result = '';
    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      if (sep === undefined) {
        sep = ',';
      }
      if (sep === null) {
        sep = 'null';
      }
      if (i < this.length - 1) {
        result += this[i] + sep;
      }

      if (i === this.length - 1) {
        result += this[i];
      }
    }
    return result;
  };
}

module.exports = applyCustomJoin;
