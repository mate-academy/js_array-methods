'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        separStr += this[i];
      }

      if (i !== this.length - 1) {
        separStr += separator;
      }
    }

    return separStr;
  };
}

module.exports = applyCustomJoin;
