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

      result += (i < this.length - 1) ? arg + sep : arg;
    }

    return result;
  };
}

module.exports = applyCustomJoin;
