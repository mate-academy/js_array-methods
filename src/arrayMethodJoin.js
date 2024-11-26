'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this.length === 1) {
        result += this[i];
      } else if (this[i] === null || this[i] === undefined) {
        result += '' + String(separator);
      } else if (i !== this.length - 1) {
        result += this[i] + String(separator);
      } else {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
