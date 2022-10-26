'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || typeof this[i] === 'undefined') {
        joinedString += '';
        joinedString += separator;
      } else {
        joinedString += this[i];
        joinedString += separator;
      }
    }

    if (this[this.length - 1] === null
      || typeof this[this.length - 1] === 'undefined') {
      joinedString += '';
    } else {
      joinedString += this[this.length - 1];
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
