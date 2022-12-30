'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let currentSeparator = separator;

    if (this.length === 0) {
      return string;
    }

    if (this.length === 1 && (this[0] === undefined || this[0] === null)) {
      return string;
    }

    if (this.length === 1) {
      string = `${this[0]}`;

      return string;
    }

    if (currentSeparator === undefined) {
      currentSeparator = ',';
    }

    for (let i = 0; i < this.length; i++) {
      if (i === 0 && this[i] === null) {
        string = '';
        continue;
      }

      if (i === 0 && this[i] !== null) {
        string = `${this[i]}`;
        continue;
      }

      if (this[i] === null || this[i] === undefined) {
        string = `${string}${currentSeparator}`;
        continue;
      }

      string = `${string}${currentSeparator}${this[i]}`;
    }

    return string;
  };
}

module.exports = applyCustomJoin;
