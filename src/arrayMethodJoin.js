'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let symbol = separator;
    const copy = [...this];

    if (copy.length === 0) {
      return '';
    }

    if (copy.length === 1) {
      symbol = '';
    }

    if (symbol === null) {
      symbol = 'null';
    }

    for (let i = 0; i < copy.length; i++) {
      if (copy[i] === null || copy[i] === undefined) {
        copy[i] = '';
      }

      if (i === copy.length - 1) {
        result += copy[i];
        break;
      }

      result += copy[i] + symbol;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
