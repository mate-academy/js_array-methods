'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let delimiter = separator;
    const copyArr = [...this];

    if (delimiter === 0 || delimiter === undefined) {
      delimiter = ',';
    }

    for (let i = 0; i < copyArr.length; i++) {
      if (copyArr[i] === null || copyArr[i] === undefined) {
        copyArr[i] = '';
      }

      result += copyArr[i];

      if (i < copyArr.length - 1) {
        result += delimiter;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
