'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let between = separator;

    if (separator === undefined) {
      between = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null || this[i] === undefined) & i + 1 !== this.length) {
        result += `${between}`;
        continue;
      }

      if (i + 1 !== this.length) {
        result += `${this[i]}${between}`;
        continue;
      }

      if (this[this.length - 1] !== undefined) {
        result += this[i];
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
