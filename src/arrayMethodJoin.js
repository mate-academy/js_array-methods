'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const length = this.length;
    const lastElementIndex = length - 1;

    for (let i = 0; i < length; i++) {
      if (this[i] === null || this[i] === undefined) {
        result += '';
      } else {
        result += this[i];
      }

      if (i !== lastElementIndex) {
        if (separator === undefined) {
          result += ',';
        } else {
          result += separator;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
