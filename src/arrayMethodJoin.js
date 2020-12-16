'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let newSeparator = separator;

    if (newSeparator === undefined) {
      newSeparator = ',';
    }

    if (newSeparator === null) {
      newSeparator = 'null';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        string += this[i];
        break;
      }

      if (this[i] === null || this[i] === undefined) {
        string += newSeparator;
        continue;
      }

      string += this[i] + newSeparator;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
