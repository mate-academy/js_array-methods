'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinStr = '';
    let tempSeparator = separator;

    if (tempSeparator === undefined) {
      tempSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      const checkStr = this[i];

      if (checkStr === null || checkStr === undefined) {
        joinStr += '';
      } else if (checkStr === 'null') {
        joinStr += 'null';
      } else {
        joinStr += checkStr;
      }

      if (i < this.length - 1) {
        joinStr += tempSeparator;
      }
    }

    return joinStr;
  };
}

module.exports = applyCustomJoin;
