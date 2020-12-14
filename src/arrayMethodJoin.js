'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // write code here
    const str = String(this);

    if (separator === undefined) {
      return str;
    }

    return str.replace(/,/g, separator);
  };
}

module.exports = applyCustomJoin;
