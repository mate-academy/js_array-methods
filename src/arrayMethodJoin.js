'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedText = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joinedText += this[i];
      }

      if (i !== this.length - 1) {
        joinedText += separator;
      }
    }

    return joinedText;
  };
}

module.exports = applyCustomJoin;
