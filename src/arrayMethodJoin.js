'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const joinElement = separator === null ? 'null' : separator;
    let joinedString = '';

    if (this.length < 1) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedString += joinElement;
      } else {
        joinedString += this[i] + joinElement;
      }
    }
    joinedString += this[this.length - 1];

    return joinedString;
  };
}

module.exports = applyCustomJoin;
