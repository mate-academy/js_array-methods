'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let resultStr = ``;

    let theSeparator = separator;

    if (Object.is(separator, undefined)) {
      theSeparator = ',';
    }

    if (Object.is(separator, null)) {
      theSeparator = 'null';
    }

    if (this.length === 0) {
      return resultStr;
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        resultStr += this[i];
      }

      if (i !== this.length - 1) {
        resultStr += theSeparator;
      }
    }

    return resultStr;
  };
}

module.exports = applyCustomJoin;
