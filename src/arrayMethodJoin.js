'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        joined += this[i].toString() + separator;
      } else {
        joined += '' + separator;
      }
    }

    joined += this[this.length - 1] === undefined
      || this[this.length - 1] === null ? '' : this[this.length - 1];

    return joined;
  };
}

module.exports = applyCustomJoin;
