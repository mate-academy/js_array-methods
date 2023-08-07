'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    const array = [...this];

    for (let i = 0; i < array.length; i++) {
      if (array[i] === null || array[i] === undefined) {
        array[i] = '';
      }

      string += array[i];

      if (i < array.length - 1) {
        string += separator !== undefined ? separator : ',';
      };
    }

    return string;
  };
}

module.exports = applyCustomJoin;
