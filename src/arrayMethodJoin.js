'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const copyThis = [...this];

    for (let i = 0; i < copyThis.length; i++) {
      if (copyThis[i] === null || copyThis[i] === undefined) {
        copyThis[i] = '';
      }

      result += copyThis[i];

      if (i < copyThis.length - 1) {
        result += separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
