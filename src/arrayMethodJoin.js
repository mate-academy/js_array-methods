'use strict';

const NULL_STRING = 'null';
const EMPTY_STRING = '';
/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here

    if (this.length === 0) {
      return EMPTY_STRING;
    };

    let character = separator;

    if (character === null) {
      character = NULL_STRING;
    }

    let result = this[0];

    if (result === null) {
      result = EMPTY_STRING;
    }

    for (let i = 1; i < this.length; i++) {
      let inputElement = this[i];

      if (this[i] === null || this[i] === undefined) {
        inputElement = EMPTY_STRING;
      }
      result += character + inputElement;
    }

    return result.toString();
  };
}

module.exports = applyCustomJoin;
