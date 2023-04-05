'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        joinedString += separator;
      }

      const element = this[i] === null || this[i] === undefined ? '' : this[i];

      joinedString += element;
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
