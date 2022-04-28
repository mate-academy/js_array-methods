'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let word = '';
    let sep = separator;

    if (separator === undefined) {
      sep = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        if (this[i] === undefined) {
        } else {
          word += `${this[i]}`;
        }
      } else if (this[i] === null || this[i] === undefined) {
        word += `${sep}`;
      } else {
        word += `${this[i]}${sep}`;
      }
    }

    return word;
  };
}

module.exports = applyCustomJoin;
