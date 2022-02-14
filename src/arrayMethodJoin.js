'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator) {
    if (separator === '') {
      return this.toString().replace(/,/gi, '');
    }

    if (separator === null) {
      return this.toString().replace(/,/gi, null);
    }

    if (!separator) {
      return this.toString();
    }

    return this.toString().replace(/,/gi, separator);
  };
}

module.exports = applyCustomJoin;
