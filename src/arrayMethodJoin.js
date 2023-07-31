'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  Array.prototype.join2 = function(separator = ',') {
    let joinedString = '';
    let separatorString = String(separator);

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        joinedString += separatorString;
      } else if (i !== this.length - 1) {
        joinedString += this[i] + separatorString;
      } else {
        joinedString += this[i];
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
