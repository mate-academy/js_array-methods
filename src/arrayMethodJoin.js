'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinWord = '';
    const arrCopy = [...this];

    for (let i = 0; i < arrCopy.length; i++) {
      if (i !== 0) {
        joinWord += separator;
      }

      if (arrCopy[i] === undefined || arrCopy[i] === null) {
        arrCopy[i] = '';
      }

      joinWord += arrCopy[i];
    }

    return joinWord;
  };
}

module.exports = applyCustomJoin;
