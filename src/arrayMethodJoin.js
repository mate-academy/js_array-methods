'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result = '';
    let ourSeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if (separator === undefined) {
        ourSeparator = ',';
      }

      if ((this[i] === undefined) || (this[i] === null)) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        result += this[i];

        return result;
      }

      result += '' + this[i] + ourSeparator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
