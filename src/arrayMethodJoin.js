'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    let separatorCopy = separator;
    const arrayCopy = [...this];

    if (arrayCopy.length === 1) {
      separatorCopy = '';
    }

    if (separatorCopy === null) {
      separatorCopy = 'null';
    }

    for (let i = 0; i < arrayCopy.length; i++) {
      if (arrayCopy[i] === null || arrayCopy[i] === undefined) {
        arrayCopy[i] = '';
      }

      if (i === arrayCopy.length - 1) {
        result += arrayCopy[i];
        break;
      }

      result += arrayCopy[i] + separatorCopy;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
