'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const copyArr = [...this];

    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] === null || copyArr[i] === undefined) {
        copyArr[i] = '';
      }

      result += copyArr[i];

      if (i < copyArr.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
