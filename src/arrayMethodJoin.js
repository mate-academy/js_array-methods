'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const arrCopy = [...this];
    let string = '';

    if (arrCopy.length === 0) {
      return string;
    }

    for (let i = 0; i < arrCopy.length; i++) {
      if (arrCopy[i] === null || arrCopy[i] === undefined) {
        arrCopy[i] = '';
      }
    }

    if (separator || separator === null) {
      for (let i = 0; i < arrCopy.length - 1; i++) {
        string = string + arrCopy[i] + separator;
      }
      string = string + arrCopy[arrCopy.length - 1];

      return string;
    }

    if (separator === '' || separator === null) {
      for (let i = 0; i < arrCopy.length; i++) {
        string = string + arrCopy[i];
      }

      return string;
    }

    for (let i = 0; i < arrCopy.length - 1; i++) {
      string = string + arrCopy[i] + ',';
    }
    string = string + arrCopy[arrCopy.length - 1];

    return string;
  };
}

module.exports = applyCustomJoin;
