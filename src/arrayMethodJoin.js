'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const between = separator === undefined ? ',' : separator;
    const initialLength = this.length;

    let newStr = '';

    for (let i = 0; i < initialLength; i++) {
      newStr += (this[i] === undefined || this[i] === null) ? '' : this[i];
      newStr += i !== initialLength - 1 ? between : '';
    }

    return newStr;
  };
}

module.exports = applyCustomJoin;
