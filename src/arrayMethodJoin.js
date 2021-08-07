'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const input = [...this];
    const inputToString = `${input}`;
    let result = '';

    if (input.length === 0) {
      return '';
    } else if (input.length === 1 || typeof separator === 'undefined') {
      return `${input}`;
    }

    for (let i = 0; i < inputToString.length; i++) {
      if (inputToString[i] === ',') {
        result += `${separator}`;
      } else {
        result += `${inputToString[i]}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
