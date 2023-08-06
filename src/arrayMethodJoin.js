'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    let joined = '';
    const formattedSeparator = separator === undefined ? ',' : '' + separator;

    for (let i = 0; i < this.length; i++) {
      const formatted = this[i] == null ? '' : this[i];

      if (i !== this.length - 1) {
        joined += formatted + formattedSeparator;
      } else {
        joined += formatted;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
