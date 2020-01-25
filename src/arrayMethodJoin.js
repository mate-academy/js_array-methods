'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joinResult = '';

    if (this.length === 0) {
      return '';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (separator === undefined) {
        joinResult += this[i] + ',';
      } else if (separator === null) {
        joinResult += this[i] + 'null';
      } else {
        joinResult += this[i] + separator;
      }
    }

    return joinResult + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
