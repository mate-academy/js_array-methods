'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str = '';
    let newSeparator = separator;

    if (newSeparator === undefined) {
      newSeparator = ',';
    }

    if (newSeparator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        str += this[i];
      } else {
        str += this[i] + newSeparator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
