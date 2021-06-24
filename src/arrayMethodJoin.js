'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedCharacters = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }
      joinedCharacters += `${this[i]}${separator}`;
    }

    joinedCharacters += this[this.length - 1];

    return joinedCharacters;
  };
};

module.exports = applyCustomJoin;
