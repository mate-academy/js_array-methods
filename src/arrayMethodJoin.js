'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrayCopy = [...this];
    let result = '';
    let newSeparator = String(separator);

    for (let i = 0; i < arrayCopy.length; i++) {
      if (i === arrayCopy.length - 1) {
        newSeparator = '';
      }

      if (arrayCopy[i] === null
        || arrayCopy[i] === undefined) {
        arrayCopy[i] = '';
      }

      result += arrayCopy[i] + newSeparator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
