'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === undefined || this[i] === null) {
          result += '';
        } else {
          result += this[i];
        }
      } else {
        if (this[i] === undefined || this[i] === null) {
          result += '' + `${separator}`;
        } else {
          result += this[i] + `${separator}`;
        }
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
