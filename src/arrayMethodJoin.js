'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const copyArray = [...this];

    for (let i = 0; i < copyArray.length; i++) {
      if (copyArray[i] === null || copyArray[i] === undefined) {
        copyArray[i] = '';
      }

      if (i === copyArray.length - 1) {
        result = result + copyArray[i];
      } else {
        result = result + copyArray[i] + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
