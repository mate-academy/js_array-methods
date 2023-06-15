'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let separatedWord = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        separatedWord += this[i];
      }

      if (i !== this.length - 1) {
        separatedWord += separator;
      }
    }

    return separatedWord;
  };
}

module.exports = applyCustomJoin;
