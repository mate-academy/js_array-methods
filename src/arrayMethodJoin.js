'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let res = '';
    let result = '';
    let newSep = separator;

    if (separator === null) {
      newSep = 'null';
    }

    if (this.length === 1) {
      for (const char of this) {
        result = char.toString();
      }
    }

    for (let char = 0; char < this.length - 1; char++) {
      if (this[char] === null || this[char] === undefined) {
        this[char] = '';
      }

      let newChar = this[char];

      newChar += newSep;
      res += newChar;
      result = res + this[this.length - 1];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
