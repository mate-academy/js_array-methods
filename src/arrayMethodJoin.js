'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let resString = '';

    for (let i = 0; i < this.length; i++) {
      const val = (this[i] === null || this[i] === undefined) ? '' : this[i];
      const finalSeparator = (i === this.length - 1) ? '' : separator;

      resString = resString + val + finalSeparator;
    }

    return resString;
  };
}

module.exports = applyCustomJoin;
