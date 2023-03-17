'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';
    const tempSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      const element = this[i];

      if (element === null || element === undefined) {
        joinedStr += '';
      } else {
        joinedStr += element;
      }

      if (i < this.length - 1) {
        joinedStr += tempSeparator;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
