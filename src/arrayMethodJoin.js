'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    if (this.length === 0) {
      return str;
    } else {
      for (let i = 0; i < this.length - 1; i++) {
        (this.length === 1) ? str += this[i]
          : (this[i] === undefined || this[i] === null) ? str += '' + separator
            : str += this[i].toString() + separator;
      }
    }

    return str + this[this.length - 1];
  };
}

module.exports = applyCustomJoin;
