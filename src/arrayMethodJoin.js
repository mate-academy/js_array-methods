'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // Who invented this task.. i want to cry
    const copyThis = [...this];
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (copyThis[i] === null || copyThis[i] === undefined) {
        copyThis[i] = '';
      }

      if (i === this.length - 1) {
        str += copyThis[i];
        continue;
      }

      str += copyThis[i];
      str += separator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
