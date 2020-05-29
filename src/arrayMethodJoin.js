'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    const regEx = /,/g;

    return this.toString().replace(regEx, separator);
  };
}

module.exports = applyCustomJoin;
