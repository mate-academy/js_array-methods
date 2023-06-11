'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const sep = separator === undefined ? ',' : separator;
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element === null || element === undefined) {
        if (i === 0 || this[i - 1] === null || this[i - 1] === undefined
          || this[i + 1] === null || this[i + 1] === undefined) {
          result += sep;
        } else {
          result += sep + sep;
        }
      } else {
        result += element;

        if (i < this.length - 1 && (this[i + 1]
          !== null && this[i + 1] !== undefined)) {
          result += sep;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
