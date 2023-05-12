'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(initialSeparator) {
    let joinedArrString = '';
    let separator = initialSeparator;
    const newArr = [...this];

    if (separator === undefined) {
      separator = ',';
    }

    if (separator === null) {
      separator = 'null';
    }

    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === null) {
        newArr[i] = '';
      }

      if (newArr[i] === undefined) {
        newArr[i] = '';
      }

      joinedArrString += newArr[i];

      if (i < newArr.length - 1) {
        joinedArrString += separator;
      }
    }

    return joinedArrString;
  };
}

module.exports = applyCustomJoin;
