'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let resultString = '';
    let tempSeparator = separator;

    if (tempSeparator === undefined) {
      tempSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      let currentItem = this[i];

      if (this[i] === undefined || this[i] === null) {
        currentItem = '';
      }
      resultString += currentItem;

      // on last element don't add separator
      if (i !== this.length - 1) {
        resultString += tempSeparator;
      };
    }

    return resultString;
  };
}

module.exports = applyCustomJoin;
