'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    if (this.length === 0) {
      return '';
    }

    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if (i === this.length - 1) {
        joined += this[i] || '';
        break;
      }

      if (this[i] === undefined || this[i] === null) {
        joined += '' + separator;
        continue;
      }
      joined += this[i] + separator;
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
