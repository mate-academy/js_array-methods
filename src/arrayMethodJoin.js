'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    // TEST PR15
  };
}

module.exports = applyCustomJoin;
