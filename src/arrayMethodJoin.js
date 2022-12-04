'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';

    for (const value of this) {
      if (this.indexOf(value) === this.length - 1) {
        if (value === undefined) {
          break;
        }

        result += `${value}`;
        break;
      }

      if (value === null || value === undefined) {
        result += `${separator}`;
        continue;
      }

      result += `${value}` + `${separator}`;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
