'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // test PR7
  };
}

module.exports = applyCustomJoin;
