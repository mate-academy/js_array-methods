'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    if (this.length === 0) {
      return '';
    }

    if (this.length > 1) {
      let output = '';

      for (let item of this) {
        if (item === null || item === undefined) {
          item = '';
        }

        output += `${item}${separator}`;
      }

      if (separator === '') {
        return output;
      }

      return output.slice(0, -`${separator}`.length);
    }

    return String(this[0]);
  };
}

module.exports = applyCustomJoin;
