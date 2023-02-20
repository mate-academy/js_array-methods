'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    let newSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        newSeparator = '';
      }

      if (this[i] === undefined || this[i] === null) {
        joinedString += newSeparator;
      } else {
        joinedString += this[i] + String(newSeparator);
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
