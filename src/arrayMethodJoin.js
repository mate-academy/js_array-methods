'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(inputStr) {
    let result = '';
    const separator = inputStr === undefined ? ',' : String(inputStr);

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        result += this[i] + separator;
      } else {
        result += separator;
      }
    }

    if (separator !== '') {
      result = result.slice(0, -(separator.length));
    }
    return result;
  };
}

module.exports = applyCustomJoin;
