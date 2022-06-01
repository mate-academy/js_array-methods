'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let string;

    if (separator !== undefined) {
      string = this.toString().replace(/,/g, separator);

      return string;
    } else {
      string = this.toString();

      return string;
    }
  };
}

module.exports = applyCustomJoin;
