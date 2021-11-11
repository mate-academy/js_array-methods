'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i] === null || this[i] === undefined ? '' : this[i];

      if (i !== this.length - 1) {
        joinedStr += element + String(separator);
      } else {
        joinedStr += element;
      }
    }

    return joinedStr;
  };
}

module.exports = applyCustomJoin;
