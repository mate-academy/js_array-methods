'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (separator !== undefined) {
      return String(this).replace(/,/g, separator);
    }

    return String(this);
  };
}

module.exports = applyCustomJoin;
