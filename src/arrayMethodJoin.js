'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const result = this.toString();

    if (separator !== undefined) {
      return result.replace(/,/g, separator);
    }

    return result;
  };
}

module.exports = applyCustomJoin;
