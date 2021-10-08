'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resultString = '';
    const arrayCopy = [...this];

    for (let i = 0; i < arrayCopy.length; i++) {
      if (arrayCopy[i] === null || arrayCopy[i] === undefined) {
        arrayCopy[i] = '';
      }

      if (i !== arrayCopy.length - 1) {
        resultString += arrayCopy[i] + `${separator}`;
      } else {
        resultString += arrayCopy[i];
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
