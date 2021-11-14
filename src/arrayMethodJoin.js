'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separationString = ',') {
    let joinedString = '';
    const separator = String(separationString);

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === null || this[i] === undefined) {
          break;
        }
        joinedString += this[i];
        break;
      }

      if (this[i] !== null && this[i] !== undefined) {
        joinedString += this[i] + separator;
      } else {
        joinedString += separator;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
