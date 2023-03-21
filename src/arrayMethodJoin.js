'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length < 1) {
      return '';
    }

    let joinedString = '';

    for (let i = 0; i < this.length; i += 1) {
      const item = this[i];

      if (item !== undefined && item !== null) {
        joinedString += item;
      }

      if (i < this.length - 1) {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
