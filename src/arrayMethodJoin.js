'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const elementsToJoin = [...this];

    let joinedElements = '';

    for (let i = 0; i < elementsToJoin.length; i++) {
      if (elementsToJoin[i] === null || elementsToJoin[i] === undefined) {
        elementsToJoin[i] = '';
      }
      joinedElements += elementsToJoin[i];

      if (i !== elementsToJoin.length - 1) {
        joinedElements += separator;
      }
    }

    return joinedElements;
  };
}

module.exports = applyCustomJoin;
