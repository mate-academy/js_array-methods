'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const lastIndex = this.length - 1;

    for (let i = 0; i < lastIndex; i++) {
      if (isValid(this[i])) {
        result += this[i];
      }

      result += separator;
    }

    if (isValid(this[lastIndex])) {
      result += this[lastIndex];
    }

    return result;
  };
}

function isValid(value) {
  return value !== null && value !== undefined;
}

module.exports = applyCustomJoin;
