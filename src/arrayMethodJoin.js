'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const sep = separator === undefined
      ? ',' : separator === null ? 'null' : separator;
    let result = '';

    for (let i = 0; i < this.length; i++) {
      let element = this[i];

      if (element === null || element === undefined) {
        element = '';
      }
      result += element;

      if (i < this.length - 1) {
        result += sep;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
