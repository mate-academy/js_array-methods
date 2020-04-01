'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const mySeparator = separator;

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === undefined) || (this[i] === null)) {
        this[i] = '';
      }

      if (i === this.length - 1) {
        result += this[i];

        return result;
      }

      result += '' + this[i] + mySeparator;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
