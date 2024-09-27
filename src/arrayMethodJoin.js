'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedToString = '';

    for (let i = 0; i < this.length; i++) {
      const itemOfThis
        = this[i] === undefined || this[i] === null
          ? ''
          : this[i];

      joinedToString += itemOfThis;

      if (i !== this.length - 1) {
        joinedToString += separator;
      }
    }

    return joinedToString;
  };
}

module.exports = applyCustomJoin;
