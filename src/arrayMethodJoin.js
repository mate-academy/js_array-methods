'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let str;

    if (separator !== undefined) {
      str = this.toString().replace(/,/g, separator);

      return str;
    } else {
      str = this.toString();

      return str;
    }
  };
}

module.exports = applyCustomJoin;
