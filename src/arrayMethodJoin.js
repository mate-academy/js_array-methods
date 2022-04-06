'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';
    const CloneSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        this[i] = '';
      }

      if (!i) {
        str += `${this[i]}`;
        continue;
      }

      str += `${CloneSeparator}${this[i]}`;
    }

    return str;
  };
}

module.exports = applyCustomJoin;
