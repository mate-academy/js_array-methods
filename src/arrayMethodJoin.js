'use strict';

/**
 * Implement method join
 *
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(...args) {
    return this.join(...args);
  };
}

module.exports = applyCustomJoin;
