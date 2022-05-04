'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const a = 8;

    return a;
  };
}

module.exports = applyCustomJoin;
