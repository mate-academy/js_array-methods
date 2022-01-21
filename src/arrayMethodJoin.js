'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let res = '';

    for (let i = 0; i < this.length - 1; i++) {
      if (this[i] !== undefined && this[i] !== null) {
        res += this[i].toString() + separator;
      } else {
        res += '' + separator;
      }
    }

    res += this[this.length - 1] === undefined ? '' : this[this.length - 1];

    return res;
  };
}

module.exports = applyCustomJoin;
