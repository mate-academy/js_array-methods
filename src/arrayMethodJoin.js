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

      if (element === undefined || element === null) {
        joinedStr += '';
      } else if (element === 'null') {
        joinedStr += 'null';
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
