'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    const array = [...this];

    let copyOfSeparator = separator;

    let str = '';

    for (let i = 0; i < array.length; i++) {
      if (array[i] === array[array.length - 1]) {
        copyOfSeparator = '';
      } else if (array[i] == null || array[i] === undefined) {
        array[i] = '';
      } else if (separator === undefined) {
        copyOfSeparator = ',';
      } else if (separator == null) {
        copyOfSeparator = 'null';
      }
      str += array[i] + copyOfSeparator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
