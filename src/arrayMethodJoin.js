'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let result = '';
    const sep = (separator === null) ? 'null' : separator;

    for (let i = 0; i < this.length; i++) {
      const arg = (this[i] === null || this[i] === undefined) ? '' : this[i];

      if (i < this.length - 1) {
        result += arg + sep;
      } else {
        result += arg;
      }
    }

    return result;
  };
}

module.exports = applyCustomJoin;
