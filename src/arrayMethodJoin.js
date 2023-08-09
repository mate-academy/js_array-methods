'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const arrCopy = [ ...this ];
    let concatenatedStr = '';

    if (!arrCopy.length) {
      return '';
    }

    for (let i = 0; i < arrCopy.length; i++) {
      if (arrCopy[i] === undefined || arrCopy[i] === null) {
        arrCopy[i] = '';
      }
    }

    for (let i = 0; i < arrCopy.length - 1; i++) {
      arrCopy[i] += separator;

      if (separator === null) {
        arrCopy[i] += 'null';
      }

      concatenatedStr += arrCopy[i];
    }

    concatenatedStr += arrCopy[arrCopy.length - 1];

    return concatenatedStr;
  };
}

module.exports = applyCustomJoin;
