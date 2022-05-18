'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const sep = separator === undefined ? ',' : separator;

    for (let i = 0; i < this.length; i++) {
      let element;

      if (this[i] === null || this[i] === undefined) {
        element = '';
      } else {
        element = this[i];
      }

      if (i === this.length - 1) {
        result = result + element;
      } else {
        result = result + element + sep;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
