'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const a = 2;
  };
}

module.exports = applyCustomJoin;
