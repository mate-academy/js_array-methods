'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const copyThis = [...this];
    const copySeparator = separator;
    let strJoin = '';

    for (let i = 0; i < copyThis.length; i++) {
      if (copyThis[i] === null || copyThis[i] === undefined) {
        strJoin += '';
      } else {
        strJoin += copyThis[i];
      }

      if (i !== copyThis.length - 1) {
        strJoin += copySeparator;
      }
    }

    return strJoin;
  };
}

module.exports = applyCustomJoin;
