'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';
    let currentSeparator;

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

    if (separator === undefined) {
      currentSeparator = ',';
    } else {
      currentSeparator = separator;
    }

    for (let i = 0; i < this.length; i++) {
      if (i === 0) {
        if (this[i] === null) {
          string = '';
        } else {
          string = `${this[i]}`;
        }
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
