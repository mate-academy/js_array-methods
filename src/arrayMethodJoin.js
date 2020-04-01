'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let localSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        str += this[i];
        continue;
      }

      if (separator === null) {
        localSeparator = 'null';
      }

      if (separator === undefined) {
        localSeparator = ',';
      }

      str += this[i] + localSeparator;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
