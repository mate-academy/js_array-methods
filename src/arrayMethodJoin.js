'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let join = '';
    const separation = separator === undefined || typeof separator === 'number'
      ? ','
      : separator;

    for (const item of this) {
      if (item !== undefined && item !== null) {
        join += item;
      }

      if (item !== this[this.length - 1]) {
        join += separation;
      }
    }

    return join;
  };
}

module.exports = applyCustomJoin;
