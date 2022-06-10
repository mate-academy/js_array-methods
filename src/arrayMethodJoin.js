'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultStr = '';
    let sep = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        resultStr += this[i];
      }

      if (sep === undefined) {
        sep = ',';
      }

      if (i !== this.length - 1) {
        resultStr += sep;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
