'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const string = this.toString();

    if (separator !== undefined) {
      return string.replace(/,/g, separator);
    } else {
      return string;
    }
  };
}

module.exports = applyCustomJoin;
