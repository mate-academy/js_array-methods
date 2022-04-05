'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resString = '';

    if (this.length < 1) {
      return resString;
    }

    if (this[0] === null) {
      resString = resString + '';
    } else {
      resString = resString + this[0];
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resString = resString + separator;
      } else {
        resString = resString + separator + this[i];
      }
    }

    return resString;
  };
}

module.exports = applyCustomJoin;
