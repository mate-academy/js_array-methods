'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let string = '';
    const copyOfArray = [...this];

    for (let i = 0; i < copyOfArray.length; i++) {
      if (copyOfArray[i] === null || copyOfArray[i] === undefined) {
        copyOfArray[i] = '';
      }

      if (i !== copyOfArray.length - 1) {
        string += copyOfArray[i] + `${separator}`;
      } else {
        string += copyOfArray[i];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
