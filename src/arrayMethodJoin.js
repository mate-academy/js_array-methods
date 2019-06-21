'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultStr = '';
    const correctSeparator = (separator === undefined)
      ? ',' : separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null
          || this[i] === undefined) {
        resultStr += `${correctSeparator}`;
      } else if (i === this.length - 1) {
        resultStr += this[i];
      } else {
        resultStr += `${this[i]}${correctSeparator}`;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
