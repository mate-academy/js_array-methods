'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const sep = typeof separator === 'undefined' ? ',' : separator;
    let result = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element === null || typeof element === 'undefined') {
        if (i === this.length - 1) {
          break;
        }
        result += sep;
      } else {
        result += element;

        if (i < this.length - 1) {
          result += sep;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
