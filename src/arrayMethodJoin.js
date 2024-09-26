'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedString = '';
    const separatorToString = String(separator);

    for (let i = 0; i < this.length; ++i) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedString += this[i];
      }

      if (i !== this.length - 1) {
        joinedString += separatorToString;
      }
    }

    return joinedString;
  };
}

module.exports = applyCustomJoin;
