'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const str = this.toString();
    return separator === undefined ? str : str.replace(/,/g, separator);
  };
}

module.exports = applyCustomJoin;
