'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const input = [...this];

    if (input.length === 0) {
      return '';
    }

    for (let i = 0; i < input.length; i++) {
      if (input[i] === null || input[i] === undefined) {
        input[i] = '';
      }

      string += input[i];

      if (i === input.length - 1) {
        break;
      }

      string += separator;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
