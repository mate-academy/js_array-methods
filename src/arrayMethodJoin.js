'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const str = this.toString().replace(/,/g, separator);

    return str;
  };
}

module.exports = applyCustomJoin;
