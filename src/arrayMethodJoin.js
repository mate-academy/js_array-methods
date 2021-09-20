'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    let str = '';
    let normilizeSeparator = separator;

    if (this.length === 0) {
      return '';
    }

    if (normilizeSeparator === undefined) {
      normilizeSeparator = ',';
    } else if (normilizeSeparator === null) {
      normilizeSeparator = 'null';
    }

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] === null || this[i] === undefined) {
        str += '' + normilizeSeparator;
      } else {
        str += this[i] + normilizeSeparator;
      }
    }

    return str + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
