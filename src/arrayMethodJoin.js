'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    return Array.prototype.join.call(this, separator);
  };
}
module.exports = applyCustomJoin;
