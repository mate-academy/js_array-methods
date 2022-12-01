'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    return this.toString().replace(/,/g, separator);
  };
};

module.exports = applyCustomJoin;
