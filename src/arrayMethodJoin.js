'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // test PR8
  };
}

module.exports = applyCustomJoin;
