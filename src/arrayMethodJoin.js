'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let finalStr = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === undefined) {
        if (i === this.length - 1) {
          finalStr += this[i];
          break;
        }
        finalStr += this[i] + ',';
        continue;
      }

      if (this[i] === undefined || this[i] === null) {
        finalStr += '';
      } else {
        finalStr += this[i];
      }

      if (i !== this.length - 1) {
        finalStr += separator;
      }
    }

    return finalStr;
  };
}

module.exports = applyCustomJoin;
