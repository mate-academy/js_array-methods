'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let newstr = '';

    for (let i = 0; i < this.length; i++) {
      if (i !== 0 && i < this.length) {
        newstr += separator;
      }

      if (this[i] !== undefined && this[i] !== null) {
        newstr += this[i];
      }
    }

    return newstr;
  };
}

module.exports = applyCustomJoin;
