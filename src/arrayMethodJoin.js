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
      let item = input[i];

      if (item === null || item === undefined) {
        item = '';
      }

      string += item;

      if (i === input.length - 1) {
        break;
      }

      string += separator;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
