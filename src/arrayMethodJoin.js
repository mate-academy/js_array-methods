'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  const original = Array.prototype.join;

  [].__proto__.join2 = function(separator) {
    return original.apply(this, arguments);
  };
}

module.exports = applyCustomJoin;
