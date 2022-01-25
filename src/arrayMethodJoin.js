'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let result = '';
    let item = separator;
    let letter;

    if (typeof item === 'undefined') {
      item = ',';
    }

    for (let i = 0; i < this.length; i++) {
      letter = this[i];

      if (typeof letter === 'number') {
        String(letter);
      }

      if (letter === this[this.length - 1] && letter === undefined) {
        return result;
      }

      if (letter === this[this.length - 1] && letter === null) {
        return result;
      }

      if (letter === null || letter === undefined) {
        letter = ',';
      }

      if (letter === this[this.length - 1] || letter === ',') {
        result += letter;
      } else {
        result = result + letter + item;
      }
    }

    return result;
  };
}
module.exports = applyCustomJoin;
