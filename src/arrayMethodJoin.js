'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultStr = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        resultStr += ((this[i] !== null && this[i]
          !== undefined) ? this[i] : '');
      } else {
        resultStr += ((this[i] !== null && this[i] !== undefined)
          ? this[i] : '') + (separator === undefined ? ',' : separator)
        + (separator === null ? 'null' : '');
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
