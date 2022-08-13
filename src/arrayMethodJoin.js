'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 1) {
      return this[0].toString();
    }

    let thisButStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        thisButStr += '';
      } else {
        thisButStr += this[i];
      }

      if (i < this.length - 1) {
        thisButStr += separator;
      }
    }

    return thisButStr;
  };
}

module.exports = applyCustomJoin;
