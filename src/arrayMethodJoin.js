'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let output = '';

    for (const item of this) {
      if (item !== null && item !== undefined) {
        if (this.indexOf(item) !== this.length - 1) {
          output += `${item}${separator}`;
        } else {
          output += item;
        }
      } else {
        if (this.indexOf(item) !== this.length - 1) {
          output += `${separator}`;
        }
      }
    }

    if (separator === '') {
      return output;
    }

    return output;
  };
}

module.exports = applyCustomJoin;
