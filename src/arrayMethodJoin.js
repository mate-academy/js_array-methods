'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const array = [...this];

    if (array.length === 0) {
      return '';
    }

    let joinedElements = '';

    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] === undefined || array[i] === null) {
        array[i] = '';
      }
      joinedElements = joinedElements + array[i] + separator;
    }

    return joinedElements + array[array.length - 1];
  };
}

module.exports = applyCustomJoin;
