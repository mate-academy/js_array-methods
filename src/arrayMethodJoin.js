'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const arrayLength = this.length;
    for (let i = 0; i < arrayLength; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        str += this[i];
      }
      if ((i < arrayLength - 1)) {
        str += separator;
      }
    }
    return str;
  };
}

module.exports = applyCustomJoin;
