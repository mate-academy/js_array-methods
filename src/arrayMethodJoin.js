'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (separator !== undefined) {
      return '' + this.toString().replace(/,/g, separator);
    }

    return '' + this.toString();
  };
}

module.exports = applyCustomJoin;
