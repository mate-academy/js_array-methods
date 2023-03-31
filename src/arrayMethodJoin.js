'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let result;

    if (separator !== undefined) {
      result = this.toString().replace(/,/g, separator);
    } else {
      result = this.toString();
    }

    return result;
  };
}

module.exports = applyCustomJoin;
