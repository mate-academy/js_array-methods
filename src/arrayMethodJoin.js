'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const newLine = separator;
    let newPhrase = '';

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        newPhrase += newLine;
      }

      if (this[i] !== null && this[i] !== undefined) {
        newPhrase += this[i];
      }
    }

    return newPhrase;
  };
}

module.exports = applyCustomJoin;
