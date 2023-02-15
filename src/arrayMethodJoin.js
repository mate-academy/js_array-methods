'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      const element = this[i] === undefined || this[i] === null
        ? ''
        : this[i];

      joined += i !== this.length - 1
        ? element + String(separator)
        : element;
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
