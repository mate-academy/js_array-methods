'use strict';

const nullString = 'null';
const emptyString = '';
/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here

    if (this.length === 0) {
      return emptyString;
    } else if (this.length === 1) {
      return this[0].toString();
    }

    let character = separator;

    if (character === null) {
      character = nullString;
    }

    let result = this[0];

    if (result === null) {
      result = emptyString;
    }

    for (let i = 1; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = emptyString;
      }
      result += character + this[i];
    }

    return result;
  };
}

module.exports = applyCustomJoin;
