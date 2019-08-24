'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let defaultSeparator = '';
    let resultString = '';

    if (separator === undefined) {
      defaultSeparator = ',';
    } else {
      defaultSeparator = separator + '';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        resultString += defaultSeparator;
      } else if (i !== this.length - 1) {
        resultString += this[i] + defaultSeparator;
      } else {
        resultString += this[i];
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
