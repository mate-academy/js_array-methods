'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // test PR5
  };
}

module.exports = applyCustomJoin;
