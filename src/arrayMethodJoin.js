'use strict';

/**
 * Implement method join
 */

function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const thisSeparator = separator === undefined ? ',' : separator;
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        str += this[i];
        continue;
      }

      str += `${this[i]}${thisSeparator}`;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
