'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      const arrayElem = this[i];

      if (arrayElem !== null && arrayElem !== undefined) {
        joinedStr += arrayElem;
      }

      if (i < this.length - 1) {
        joinedStr += separator;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
