'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strRersult = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        strRersult += this[i];
      }

      if (i < this.length - 1) {
        strRersult += separator;
      }
    }

    return strRersult;
  };
}

module.exports = applyCustomJoin;
