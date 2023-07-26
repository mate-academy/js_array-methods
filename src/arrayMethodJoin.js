'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    const resultSeparator = separator !== undefined ? `${separator}` : ',';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        (i === this.length - 1)
          ? result += ''
          : result += '' + resultSeparator;
      } else {
        (i === this.length - 1)
          ? result += this[i]
          : result += this[i] + resultSeparator;
      }
    };

    return result;
  };
}
module.exports = applyCustomJoin;
