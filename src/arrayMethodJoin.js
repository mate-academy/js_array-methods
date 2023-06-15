'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let joined = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === null || this[i] === undefined)
        && i === this.length - 1) {
        continue;
      } else if (this[i] === null || this[i] === undefined) {
        joined += separator;
      } else if (i === this.length - 1) {
        joined += this[i];
      } else {
        joined = joined + this[i] + separator;
      }
    }

    return joined;
  };
}

module.exports = applyCustomJoin;
