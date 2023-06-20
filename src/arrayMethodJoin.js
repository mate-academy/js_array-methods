'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] !== null && this[i] !== undefined) {
        (i === this.length - 1)
          ? result = result + this[i]
          : result = result + this[i] + separator;
      } else if (i !== this.length - 1) {
        result += '' + separator;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
