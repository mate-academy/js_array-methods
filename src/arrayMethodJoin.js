'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    return separator === undefined ? this.toString()
      : this.toString().replace(/,/g, separator);
  };
}
module.exports = applyCustomJoin;
