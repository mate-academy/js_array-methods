'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultString = '';
    let itemOfSeparator = separator;

    if (separator === undefined) {
      itemOfSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] !== null) && (this[i] !== undefined)) {
        resultString += this[i];
      } else {
        resultString += '';
      }

      if (i !== this.length - 1) {
        resultString += itemOfSeparator;
      }
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
