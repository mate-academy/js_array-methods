'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length; i++) {
      if ([null, undefined].includes(this[i])) {
        this[i] = '';
      }
    }

    let joinedString = `${this[0]}`;

    for (let i = 1; i < this.length; i++) {
      joinedString += separator + this[i].toString();
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
