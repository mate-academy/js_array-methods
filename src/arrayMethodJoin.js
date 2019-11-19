'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resString = '';
    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        resString += this[i];
      } else if (this[i] === undefined || this[i] === null) {
        resString += separator;
      } else {
        resString += this[i].toString() + separator;
      }
    }

    return resString;
  };
}

module.exports = applyCustomJoin;
