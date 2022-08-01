'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === undefined && i !== this.length - 1)
      || this[i] === null) {
        result += `${separator}`;
      } else if (i === this.length - 1 && this[i] === undefined) {
        break;
      } else if (i === this.length - 1) {
        result += this[i];
      } else {
        result += this[i] + `${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
