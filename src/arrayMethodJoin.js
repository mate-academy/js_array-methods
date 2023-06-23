'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const array = [...this];

    let result = '';

    for (let i = 0; i < array.length; i++) {
      if (array[i] !== undefined & array[i] !== null) {
        result += array[i];
      }

      if (i < (array.length - 1)) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
