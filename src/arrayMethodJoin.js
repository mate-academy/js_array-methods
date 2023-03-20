'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';
    let separ = separator;

    if (separator === null) {
      separ = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      let wordToAdd = this[i];

      if (this[i] === null || this[i] === undefined) {
        wordToAdd = '';
      }

      if (i + 1 === this.length) {
        return (result += wordToAdd);
      }

      result += wordToAdd + separ;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
