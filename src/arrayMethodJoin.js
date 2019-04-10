'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(...theArgs) {
    // write code here
    return this.join(...theArgs);
  };
}

module.exports = applyCustomJoin;
