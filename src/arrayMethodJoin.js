'use strict';

/**
 * Implement method join
 */
function applyCustomJoin() {
  [].__proto__.join2 = function(separator = ',') {
    let str = '';

    for (let i = 0; i < this.length; i++) {
      if (this[i] === undefined || this[i] === null) {
        if (i < this.length - 1) {
          str += separator;
        }
      } else {
        str += this[i];

        if (i < this.length - 1) {
          str += separator;
        }
      }
    }

    return str;
  };
}

// const source = [0, 1, 2, 3];
// const str = source.join2('-');

module.exports = applyCustomJoin;
