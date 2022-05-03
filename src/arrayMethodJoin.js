'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if ((this[i] === undefined || this[i] === null)
      && i !== this.length - 1) {
        str += separator;
        continue;
      }

      if (this[i] === undefined && i === this.length - 1) {
        continue;
      }

      if (this[i] !== undefined && i === this.length - 1) {
        str += this[i];
      } else {
        str += this[i];
        str += separator;
      }
    }

    return str;
  };
}

module.exports = applyCustomJoin;
