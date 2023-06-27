'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const length = this.length;
    const lastElementIndex = length - 1;
    const defSeparator = ',';

    for (let i = 0; i < length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        result += this[i];
      }

      if (i !== lastElementIndex) {
        if (separator === undefined) {
          result += defSeparator;
        } else {
          result += separator;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
