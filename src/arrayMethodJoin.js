'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  Array.prototype.join2 = function(separator = ',') {
    let joinedString = '';

    if (separator !== undefined) {
      String(separator)
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedString += separator;
      } else if (i !== this.length - 1) {
        joinedString += this[i] + separator;
      } else {
        joinedString += this[i];
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
