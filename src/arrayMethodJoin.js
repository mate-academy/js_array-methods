'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    // write code here
    let string = '';

    for (let value = 0; value < this.length; value++) {
      if (this[value] == null) {
        string = string + separator;
        continue;
      };

      if (value !== this.length - 1 && this.length > 1) {
        string += this[value] + String(separator);
      } else {
        string = string + this[value];
      }
    }

    return string;
  };
}

module.exports = applyCustomJoin;
