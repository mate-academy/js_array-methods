'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      let currentElement = this[i];

      if (currentElement === null || currentElement === undefined) {
        currentElement = '';
      }

      if (i < this.length - 1) {
        joinedStr += currentElement + String(separator);
      } else {
        joinedStr += currentElement;
      }
    };

    return joinedStr;
  };
}
module.exports = applyCustomJoin;
