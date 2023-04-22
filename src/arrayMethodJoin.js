'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let a = '';

    for (let i = 0; i < this.length; i++) {
      if (separator === null && i !== this.length - 1) {
        a += this[i] + 'null';
      } else if (this[i] === null) {
        a += separator;
      } else if (this[i] === undefined && i !== this.length - 1) {
        a += separator;
      } else if (this[i] === undefined && i === this.length - 1) {
        continue;
      } else if (i === this.length - 1) {
        a += this[i];
      } else {
        a += this[i] + separator;
      }
    }

    return a;
  };
}

module.exports = applyCustomJoin;
