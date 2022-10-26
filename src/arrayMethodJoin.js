'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const modifiedThis = [...this];
    const newArray = [];
    let result = '';

    for (let i = 0; i < modifiedThis.length; i++) {
      if (modifiedThis[i] === null || modifiedThis[i] === undefined) {
        modifiedThis[i] = '';
      }
    }

    for (let i = 0; i < modifiedThis.length; i++) {
      newArray[i * 2] = modifiedThis[i];
    }

    for (let i = 1; i < newArray.length; i = i + 2) {
      newArray[i] = separator;

      if (separator === undefined) {
        newArray[i] = ',';
      }
    }

    for (const element of newArray) {
      result += element;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
