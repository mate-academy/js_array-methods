'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const specialChar = separator;
    let joinedString = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        joinedString += this[i];
      }

      if (i !== this.length - 1) {
        joinedString += specialChar;
      }
    }

    return (joinedString);
  };
}

module.exports = applyCustomJoin;
