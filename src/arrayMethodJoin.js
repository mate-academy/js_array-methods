'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // test PR6
  };
}

module.exports = applyCustomJoin;
