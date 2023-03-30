'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joiner = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[this.length - 1] === undefined) && (i === this.length - 1)) {
        break;
      } else if ((this[i] === undefined) || (this[i] === null)) {
        joiner += `${separator}`;
        continue;
      } else if (this[i] === this[this.length - 1]) {
        joiner += `${this[i]}`;
      } else {
        joiner += `${this[i]}${separator}`;
      }
    }

    return joiner;
  };
}

module.exports = applyCustomJoin;
