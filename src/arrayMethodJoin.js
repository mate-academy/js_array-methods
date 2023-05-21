'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let newLine = separator;
    let newPhrase = '';

    if (newLine === undefined) {
      newLine = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i > 0) {
        newPhrase += newLine;
      }

      if (this[i] === null || this[i] === undefined) {
        newPhrase += '';
      } else {
        newPhrase += this[i];
      }
    }

    return newPhrase;
  };
}

module.exports = applyCustomJoin;
