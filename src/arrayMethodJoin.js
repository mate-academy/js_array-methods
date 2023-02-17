'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedToString = '';

    for (let i = 0; i < this.length; i++) {
      let itemOfThis = this[i];

      if (itemOfThis === null || itemOfThis === undefined) {
        itemOfThis = '';
      }

      joinedToString += itemOfThis;

      if (i !== this.length - 1) {
        joinedToString += separator;
      }
    }

    return joinedToString;
  };
}

module.exports = applyCustomJoin;
