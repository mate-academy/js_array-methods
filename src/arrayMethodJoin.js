'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joinedStr = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== undefined && this[i] !== null && this[i] !== '') {
        joinedStr += this[i];

        if (i !== this.length - 1) {
          joinedStr += separator;
        }
        continue;
      }

      if (i !== this.length - 1) {
        joinedStr += separator;
      }
    }

    return joinedStr;
  };
}
module.exports = applyCustomJoin;
