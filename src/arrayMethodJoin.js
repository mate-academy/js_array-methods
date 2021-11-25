'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    const str = 'test PR';
  };
}

module.exports = applyCustomJoin;
