'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        result += this[i] || '';

        return result;
      }

      switch (this[i]) {
        case undefined:
        case null:
          result += '' + `${separator}`;

          break;
        default:
          result += this[i] + `${separator}`;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
