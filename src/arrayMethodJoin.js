'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    } else if (this.length === 1) {
      return this[0] + '';
    }

    let string = '';
    const usefulSeparator = '' + separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        string = string + usefulSeparator;
        continue;
      }

      string += this[i];

      if (this[i] === this[this.length - 1]) {
        continue;
      }
      string += usefulSeparator;
    }

    return string;
  };
}
module.exports = applyCustomJoin;
