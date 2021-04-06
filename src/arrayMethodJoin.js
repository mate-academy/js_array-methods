'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === undefined) {
        if (i === this.length - 1) {
          string = `${string}${this[i]}`;
          break;
        };

        string = `${string}${this[i]},`;
        continue;
      };

      if (this[i] === null || this[i] === undefined) {
        this[i] = '';
      };

      if (i === this.length - 1) {
        string = `${string}${this[i]}`;
        break;
      };

      string = `${string}${this[i]}${separator}`;
    };

    return string;
  };
}

module.exports = applyCustomJoin;
