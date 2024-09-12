'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let strFromArray = '';

    if (this.length < 1) {
      return strFromArray;
    }

    if (this[0] !== null && this[0] !== undefined) {
      strFromArray += this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        strFromArray += separator;
      } else if (separator === null) {
        strFromArray += 'null' + this[i];
      } else {
        strFromArray += separator + this[i];
      }
    }

    return strFromArray;
  };
}

module.exports = applyCustomJoin;
